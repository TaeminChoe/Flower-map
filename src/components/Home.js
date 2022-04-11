import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);

  const getData = async (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise finish time ::", time);
        resolve();
      }, time * 1000);
    });
  };

  useEffect(() => {
    Promise.all([getData(3), getData(4), getData(2)]).then(() => {
      setLoading(false);
    });
  }, []);

  return <Container>{loading ? <Loading /> : <h1>Home</h1>}</Container>;
};

export default Home;
