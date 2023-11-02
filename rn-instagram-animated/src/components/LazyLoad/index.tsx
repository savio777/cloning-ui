import React, { useEffect, useState } from "react";

import { Small, PostImg } from "./styles";
import { Animated } from "react-native";

type ILazyLoadProps = Pick<IFeed, "aspectRatio" | "image" | "small">;

const LazyLoad: React.FC<ILazyLoadProps> = ({ aspectRatio, image, small }) => {
  const opacity = new Animated.Value(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => setIsLoaded(false);
  }, []);

  const handleAnimated = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Small source={{ uri: small }} ratio={aspectRatio}>
      {isLoaded && (
        <PostImg
          style={{ opacity }}
          ratio={aspectRatio}
          source={{ uri: image }}
          onLoadEnd={handleAnimated}
        />
      )}
    </Small>
  );
};

export default LazyLoad;
