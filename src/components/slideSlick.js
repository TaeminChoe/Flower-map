import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from "styled-components";

import map_full from "../images/map_full.png";
import map_line from "../images/map_line.png";
import { StyledImage } from "../css/styledImage";
import { StyledHeader } from "../css/styledHeader";

function SlideSlick(query) {
  const StyledSlick = styled(Slider)`
    /* 공통스타일 */
    text-align: center;
    /* 슬라이드 아래 점 */
    .slick-dots {
      .slick-active {
        button::before {
          color: white;
        }
      }
      button::before {
        color: #e9e9e9;
      }
    }
    /* 슬라이드 <> 버튼 */
    .slick-prev:before,
    .slick-next:before {
      font-size: 3rem;
    }

    /* 슬라이드 폰트 크기, <> 버튼 설정 */
    ${() => {
      console.log(query.query);
      if (query.query == "pc") {
        return css`
          font-size: 3rem;
        `;
      } else if (query.query == "tablet") {
        return css`
          font-size: 3rem;
        `;
      } else if (query.query == "mobile") {
        return css`
          font-size: 1.6rem;
          .slick-prev:before,
          .slick-next:before {
            display: none;
          }
        `;
      }
    }}
  `;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlick {...settings}>
      <div>
        <StyledHeader query={query}>벚꽃</StyledHeader>
        <StyledImage src={map_full} />
      </div>
      <div>
        <StyledHeader query={query}>진달래</StyledHeader>
        <StyledImage src={map_line} />
      </div>
      <div>
        <StyledHeader query={query}>개나리</StyledHeader>
        <StyledImage src={map_full} />
      </div>
    </StyledSlick>
  );
}
export default SlideSlick;
