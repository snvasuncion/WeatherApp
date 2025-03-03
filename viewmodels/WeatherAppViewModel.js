import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get("window").width > Dimensions.get("window").height
  );

  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(
        Dimensions.get("window").width > Dimensions.get("window").height
      );
    };

    const subscription = Dimensions.addEventListener(
      "change",
      updateOrientation
    );

    return () => subscription?.remove();
    
  }, []);

  return isLandscape;
};

export const useRandomGif = (gifArray) => {
  const [randomGif, setRandomGif] = useState(gifArray[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gifArray.length);
    setRandomGif(gifArray[randomIndex]);
  }, [gifArray]);

  return randomGif;
};
