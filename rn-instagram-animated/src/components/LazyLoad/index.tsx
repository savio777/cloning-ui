import React, { useEffect, useState } from "react";

import { Small, PostImg } from "./styles";
import { Animated } from "react-native";

interface ILazyLoadProps {
  data: Pick<IFeed, "aspectRatio" | "image" | "small">;
  shouldLoadImg: boolean;
}

const LazyLoad: React.FC<ILazyLoadProps> = ({
  data: { aspectRatio, image, small },
  shouldLoadImg,
}) => {
  const opacity = new Animated.Value(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // setTimeout para simular lazyLoad
    setTimeout(() => { 
      setIsLoaded(true);
    }, 1000);
  }, [shouldLoadImg]);

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
