import axios, { AxiosRequestConfig } from "axios";
import cheerio from "cheerio";

export const urlTocheerio = async (url: string, config: AxiosRequestConfig = {}) => {
  try {
    const _ = await axios.get(url, config);
    if (_.status !== 200) {
      throw new Error(_.statusText);
    }
    return cheerio.load(_.data);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const getToday: () => string = () => {
  return new Date().getDate().toLocaleString();
}