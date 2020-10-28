import axios from "axios";
import { Video } from "./Video";

const API = 'http://localhost:5000';

export const create = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
};

export const read = async () => {
  return await axios.get<Video[]>(`${API}/videos`);
};

export const readOne = async (id: string) => {
  return await axios.get<Video>(`${API}/videos/${id}`);
};

export const update = async (id: string, video: Video) => {
  return await axios.put(`${API}/videos/${id}`, video);
};

export const deleted = async (id: string) => {
  return await axios.delete(`${API}/videos/${id}`);
};