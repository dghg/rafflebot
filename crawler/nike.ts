import { urlTocheerio, getToday } from "./middleware";
import cheerio from "cheerio";
import { SubjectInfo, crawlerReturnType } from "./types";
const TODAY = getToday();

const NikeCrawler: () => Promise<crawlerReturnType | undefined> = async () => {
  try {
    const $ = await urlTocheerio("https://www.nike.com/kr/launch/?type=upcoming");
    if (!$) {
      return undefined;
    }
    const items = $("li.launch-list-item");
    const result: SubjectInfo[] = [];
    items.each((idx, el) => {
      if (($(el).find(".day").html() as string) === TODAY) {
        // Check that Release Date)
        const title = $(el).find(".txt-description").text();
        const info = $(el).find(".txt-subject").text();
        result.push({
          title,
          info,
        });
      }
    });
    return {
      result,
      pageInfo: "Nike",
    };
  } catch (err) {
    console.log(err);
  }
};

export default NikeCrawler;
