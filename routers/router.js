const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

// VR glasses роутер
const { 
  getVRglassesData, 
  postVRglassesData 
} = require("../controllers/vrglassesDataController");

router.route("/VRglasses").get(getVRglassesData).post(postVRglassesData);


// Access роутер
const { 
  getAccessData, 
  postAccessData 
} = require("../controllers/accessDataController");

router.route("/access").get(getAccessData).post(postAccessData);

// Blog роутер
const { 
  getBlogData, 
  postBlogData 
} = require("../controllers/blogDataController");

router.route("/blog").get(getBlogData).post(postBlogData);

// Footer роутер
const { 
  getFooterData, 
  postFooterData 
} = require("../controllers/footerDataController");

router.route("/footer").get(getFooterData).post(postFooterData);

module.exports = router;
