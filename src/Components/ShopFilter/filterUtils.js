const setSliderParams = (category, setSliderStep, setPriceLimit, setPriceRange) => {
  if(category === "men"){
    setSliderStep(250);
    setPriceLimit([0, 5500]);
    setPriceRange([0, 5500]);
  } else if(category === "women"){
    setSliderStep(200);
    setPriceLimit([0, 4000]);
    setPriceRange([0, 4000]);
  } else if(category === "kid"){
    setSliderStep(100);
    setPriceLimit([0, 2000]);
    setPriceRange([0, 2000]);
  } else if(category === "home&living"){
    setSliderStep(175);
    setPriceLimit([0, 3500]);
    setPriceRange([0, 3500]);
  } else if(category === "laptop"){
    setSliderStep(10000);
    setPriceLimit([20000, 250000]);
    setPriceRange([20000, 250000]);
  } else if(category === "mobile&tablet"){
    setSliderStep(5000);
    setPriceLimit([5000, 180000]);
    setPriceRange([5000, 180000]);
  }
}

export default setSliderParams;