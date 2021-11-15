import React, { createContext, useEffect, useState } from "react";
import axios from "../api/axios";

const MainContext = createContext({});
export const MainProvider = (props) => {
  const [activeMode, setActiveMode] = useState({ easy: true });
  const [score, setScore] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get()
      .then((res) => {
        const modeData = res.data.results.filter(
          (data) => activeMode[data.difficulty]
        );
        setData(modeData);
      })
      .catch((err) => console.log(err));
  }, [activeMode]);

  const toggleActive = (level) => {
    setActiveMode({ [level]: true });
  };

  const handleScore = () => {
    setScore((prev) => prev + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const dataMain = {
    activeMode,
    data,
    handleScore,
    resetScore,
    score,
    toggleActive,
  };

  return (
    <MainContext.Provider value={dataMain}>
      {props.children}
    </MainContext.Provider>
  );
};
export default MainContext;
