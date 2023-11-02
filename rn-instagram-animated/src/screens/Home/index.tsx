import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useRef, useState } from "react";

import { Container, FooterLoading } from "./styles";
import { FlatList, RefreshControl } from "react-native";
import PostItem from "../../components/PostItem";

const LIMIT_ITEMS_PER_PAGE = 5;

const Home: React.FC = () => {
  const refFlatlist = useRef<FlatList>();

  const [posts, setPosts] = useState<IFeed[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [changedItems, setChangedItems] = useState<string[]>([]);

  const loadPage = async (
    incrementPage = false,
    pageNumber = page,
    isActive = true
  ) => {
    try {
      if (totalPages && pageNumber > totalPages) return;

      console.log("loadPage");

      setIsLoading(true);

      const response = await fetch(
        `http://10.0.2.2:3000/feed?_expand=author&_limit=${LIMIT_ITEMS_PER_PAGE}&_page=${
          incrementPage ? pageNumber + 1 : 1
        }`
      );

      if (isActive) {
        const responseJson = await response.json();
        const totalItems = response.headers.get("X-Total-Count");

        setTotalPages(Math.ceil(Number(totalItems) / LIMIT_ITEMS_PER_PAGE));
        setPosts((oldValue) =>
          incrementPage ? [...oldValue, ...responseJson] : responseJson
        );
        setPage((oldValue) => (incrementPage ? oldValue + 1 : 1));

        refFlatlist?.current?.flashScrollIndicators();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      loadPage(false, 1, isActive);

      return () => {
        isActive = false;
      };
    }, [])
  );

  const handleViewableItemsChanged = useCallback(({ changed }) => {
    setChangedItems(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <FlatList
        ref={refFlatlist}
        keyExtractor={(item) => String(item.id)}
        data={posts}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage(true)}
        refreshing={isLoading}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 20,
        }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={() => loadPage()} />
        }
        renderItem={({ item }) => (
          <PostItem
            data={item}
            shouldLoadImg={changedItems.includes(item.id)}
          />
        )}
        // causando duplicação de index por fazer o onEndReached dar loading sem q o usuário deseja
        // ListFooterComponent={isLoading && <FooterLoading />}
      />
    </Container>
  );
};

export default Home;
