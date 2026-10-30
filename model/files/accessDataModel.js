const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "accessData.json");

const getAccessDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    console.log(file);
    throw new Error("Не получилось прочитать данные из файла");
  }
};

const postAccessDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    console.log(file);
    throw new Error("Не получилось записать данные в файл");
  }
};

module.exports = { getAccessDataModel, postAccessDataModel };
