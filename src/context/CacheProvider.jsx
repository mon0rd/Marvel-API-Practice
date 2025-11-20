import { useState } from "react";
import { CacheContext } from "/src/context/CacheContext.jsx";

export function CacheProvider({ children }) {
  const [charList, setCharList] = useState([]),
    [offset, setOffset] = useState(0),
    [lastBatchIndex, setLastBatchIndex] = useState(0),
    [decor, setDecor] = useState(),
    [lastAnimatedIndex, setLastAnimatedIndex] = useState(-1);

  const updateCache = (newCharList) => {
    setCharList((prev) => [...prev, ...newCharList]);
    setLastBatchIndex(charList.length);
  };

  const markAnimated = (newLastIndex) => {
    setLastAnimatedIndex(newLastIndex);
  };

  return (
    <CacheContext.Provider
      value={{
        charList,
        updateCache,
        offset,
        setOffset,
        lastBatchIndex,
        setLastBatchIndex,
        lastAnimatedIndex,
        markAnimated,
        decor,
        setDecor,
      }}>
      {children}
    </CacheContext.Provider>
  );
}
