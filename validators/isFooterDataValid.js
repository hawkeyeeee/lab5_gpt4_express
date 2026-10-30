const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  
  isObjectHasProps(data, ["brandName", "addressBlock", "linksGroups", "contactsBlock"]);
  
  isObjectHasProps(data.addressBlock, ["text", "copyright"]);
  
  isObjectHasProps(data.contactsBlock, ["title", "address", "phone", "email"]);
  
  isArrayHasLength(data.linksGroups);
  
  data.linksGroups.forEach((group) => {
    
    isObjectHasProps(group, ["title", "items"]);
    
    isArrayHasLength(group.items);
    
    group.items.forEach((item) => isObjectHasProps(item, ["title", "href"]));
  });
};

module.exports = isFooterDataValid;
