const isAccessDataValid = require("../validators/isAccessDataValid");

const { 
  getAccessDataModel, 
  postAccessDataModel 
} = require("../model/files/accessDataModel");

const getAccessData = (req, res, next) => {
  try {
    const data = getAccessDataModel();
    
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postAccessData = (req, res, next) => {
  try {
    const data = req.body;
    isAccessDataValid(data);
    postAccessDataModel(JSON.stringify(data));
    res.status(200).json({ message: "Данные успешно обновлены" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAccessData, postAccessData };
