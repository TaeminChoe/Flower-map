import React from "react";
import styled from "styled-components";
import { StyledRegion } from "../../css/StyledRegion";

const IncheonButton = styled(StyledRegion)`
  clip-path: polygon(
    14.62% 20.22%,
    13.86% 19.96%,
    13.67% 19.32%,
    14.92% 18.63%,
    13.52% 18.49%,
    14.51% 18.31%,
    15.25% 17.66%,
    15.86% 17.74%,
    17.4% 18.51%,
    19.37% 18.7%,
    18.58% 19.21%,
    18.41% 19.92%,
    17.89% 20.46%,
    18.93% 20.92%,
    18.93% 20.92%,
    18.95% 21.11%,
    18.95% 21.13%,
    18.71% 21.5%,
    18.71% 21.5%,
    18.24% 21.75%,
    17.27% 22.4%,
    16.52% 22.39%,
    15.6% 22.99%,
    14.05% 22.31%,
    14.1% 21.52%,
    13.63% 20.76%,
    14.62% 20.22%
  );
`;

const Incheon = () => {
  return <IncheonButton />;
};

export default Incheon;
