import axios from "axios";
import { uriApi } from "../helpers/constants";
import { IItem } from "../helpers/interfaces";
export const getNewNews = async () => {
  try {
    const res = await axios.get(`${uriApi}newstories.json`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getComment = async (newId: number) => {
  try {
    const data = await axios.get(`${uriApi}item/${newId}.json`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getNews = async (newId: number[]) => {
  try {
    let dataS: IItem[] = [];
    for (let i = 0; i < newId.length; i++) {
      const dataRes = await axios.get(`${uriApi}item/${newId[i]}.json`);
      if (dataRes?.data) dataS.push(dataRes.data);
    }

    return dataS;
  } catch (err) {
    console.log(err);
  }
};
