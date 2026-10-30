const { isObjectHasProps } = require("./utils/validators");

const isAccessDataValid = (data) => {
  isObjectHasProps(data, ["offerText", "header", "button", "registrationBlock"]);
  isObjectHasProps(data.button, ["title", "href"]);
  isObjectHasProps(data.registrationBlock, ["subHeader", "header", "buttonTitle"]);
};

module.exports = isAccessDataValid;
