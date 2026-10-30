const isVRglassesDataValid = require("../validators/isVRglassesDataValid");

const { getVRglassesDataModel, postVRglassesDataModel } = require("../model/files/vrglassesDataModel");

const getVRglassesData = (req, res, next) => {
  try {
    const data = getVRglassesDataModel();
    
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postVRglassesData = (req, res, next) => {
  try {
    const data = req.body;
    isVRglassesDataValid(data);
    postVRglassesDataModel(JSON.stringify(data));
    res.status(200).json({ message: "Данные успешно обновлены" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getVRglassesData, postVRglassesData };
