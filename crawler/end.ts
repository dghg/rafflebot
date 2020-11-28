import { urlTocheerio, getToday } from './middleware';
import {SubjectInfo, crawlerReturnType} from './types';
const TODAY = getToday();

const EndCrawler: () => Promise<crawlerReturnType | undefined> = async () => {
  try {
    const $ = await urlTocheerio("https://launches.endclothing.com/");
    if(!$) {
      return undefined;
    }
    const items = $(".msDhF")[0];
    const result: SubjectInfo[] = [];
    items.children.forEach((el,idx)=> {
      const title = $(el.children[2]).text();
      const day = $(el.children[1]).text();
      if(day.substr(0,2) === TODAY) {
        result.push({
          title,
          info: day,
        });
      }
    });
    return {
      result,
      pageInfo: "End Clothing",
    }

} catch (err) {
  console.log(err);
  }
}

export default EndCrawler;