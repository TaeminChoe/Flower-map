import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideArea() {
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  let slider1 = [];
  let slider2 = [];

  React.useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <div>
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider asNavFor={nav1} ref={(slider) => (slider1 = slider)}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        asNavFor={nav2}
        ref={(slider) => (slider2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SlideArea;
