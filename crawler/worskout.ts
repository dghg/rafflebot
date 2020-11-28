import { urlTocheerio } from "./middleware";
import cheerio from "cheerio";
import { SubjectInfo, crawlerReturnType } from "./types";
const TODAY = new Date().getDate().toLocaleString();

const config = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36",
  },
};
//() => Promise<crawlerReturnType | undefined>
const WorksoutCrawler = async () => {
  try {
    const $ = await urlTocheerio("https://www.worksout-raffle.co.kr/", config);
    if (!$) {
      return undefined;
    }
    console.log($.html());
  } catch (err) {
    return undefined;
  }
};

export default WorksoutCrawler;
