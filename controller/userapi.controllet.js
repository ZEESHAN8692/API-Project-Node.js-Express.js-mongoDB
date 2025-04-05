import express from "express";
import User from "../model/userApi.model.js";

export const home = async (req, res) => {
  try {
    res.render("home");
  } catch (error) {
    res.send(`<h1 style="color:red; text-align:center">Error = ${error}</h1>`);
  }
};

export const userApiGet = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.send(`<h1 style="color:red; text-align:center">Error = ${error}</h1>`);
  }
};

export const userApiCreate = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.send(`<h1 style="color:red; text-align:center">Error = ${error}</h1>`);
  }
};
