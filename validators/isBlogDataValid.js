const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
  isObjectHasProps(data, ["mainHeader", "posts"]);
  isArrayHasLength(data.posts);
  
  data.posts.forEach((post) => {
    isObjectHasProps(post, ["id", "date", "title", "imageSrc", "imageAlt", "linkHref"]);
  });
};

module.exports = isBlogDataValid;
