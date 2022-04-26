import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
//css
import { StyledHeader } from "../css/StyledHeader";
import Korea from "./Korea";

const StyledSlick = styled(Slider)`
  /* 공통스타일 */
  text-align: center;
  /* 슬라이드 아래 점 */
  .slick-dots {
    bottom: 30px;
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

  & > div {
    position: relative;
  }

  /* 슬라이드 폰트 크기, <> 버튼 설정 */
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 3rem;
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }
`;

function SlideFlower() {
  const FLOWERS = ["벚꽃", "진달래", "개나리"];
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
      {FLOWERS.map((flower, idx) => {
        return (
          <div key={`${idx}`}>
            <StyledHeader>
              <h3>{flower}</h3>
            </StyledHeader>
            <Korea name={flower} />
          </div>
        );
      })}
    </StyledSlick>
  );
}
export default SlideFlower;
