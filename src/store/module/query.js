import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

/* ----------------------------------------------Initial */
const initialState = {
  query: "mobile",
};

/* ----------------------------------------------Actions */
const GET_QUERY = "getQuery/GET_QUERY";

/* ----------------------------------------------Action create */
export const getQuery = (query) => {
  return {
    type: GET_QUERY,
    query: query,
  };
};

/* ---------------------------------------------- Reducer */
const Query = (state = initialState, action) => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const query = useRef();

  switch (action.type) {
    case GET_QUERY:
      if (isPc) {
        query.current = "pc";
      } else if (isTablet) {
        query.current = "tablet";
      } else if (isMobile) {
        query.current = "mobile";
      }
      console.log(query);
      return {
        query: query,
      };
    default:
      return state;
  }
};

export default Query;
