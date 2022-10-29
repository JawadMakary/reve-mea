import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("./holidayhome.json");
  return response.data;
};
export const getOffPlans = async () => {
  const response = await axios.get("./offplan.json");
  return response.data;
};
