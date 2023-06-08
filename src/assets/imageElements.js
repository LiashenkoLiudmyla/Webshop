import React from "react";

const Images = [
  "../assets/header_buttons/all.png",
  "../assets/header_buttons/burger.png",
  "../assets/header_buttons/donat.png",
  "../assets/header_buttons/drink.png",
  "../assets/header_buttons/pizza.png",
  "../assets/header_buttons/salad.png",
];
const imageElements = Images.map((image, index) => (

  <img key={index} src={image} alt={`Image ${index}`} />
));

export default imageElements;
