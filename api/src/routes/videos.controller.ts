import { RequestHandler } from "express";
import Video from "./Video";

export const create: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The url already exists" });

  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
};

export const read: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
    res.json(error);
  }
};

export const readOne: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ _id: req.params.id });
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};

export const update: RequestHandler = async (req, res) => {
  const videoUpdated = await Video.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(videoUpdated);
};

export const deleted: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOneAndDelete({ _id: req.params.id });
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};
