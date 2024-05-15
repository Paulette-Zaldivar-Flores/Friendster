const express = require("express");
const router = express.Router();
const locationService = require("../services/locationService");
const utils = require("../utils/utils");
const admin = require("firebase-admin");


//getall locations
const getLocations = async (req, res) => {
  try {
    const locations = await locationService.getAllLocations();
    return res.status(200).json(locations);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
exports.getLocations = getLocations;