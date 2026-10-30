const { isObjectHasProps } = require("./utils/validators");

const isVRglassesDataValid = (data) => {
  
  isObjectHasProps(data, ["illustration", "subHeader", "header", "description", "ctaLink"]);
  
  isObjectHasProps(data.illustration, ["src", "alt"]);
  
  isObjectHasProps(data.ctaLink, ["title", "href"]);
};

module.exports = isVRglassesDataValid;
