import { urlTocheerio, getToday } from './middleware';
import {SubjectInfo, crawlerReturnType} from './types';
const TODAY = getToday();

const EndCrawler: () => Promise<crawlerReturnType | undefined> = async () => {
  try {
    const $ = await urlTocheerio("https://launches.endclothing.com/");
    if(!$) {
      return undefined;
    }
    const items = $(".msDhF");
    console.log(items.text());

} catch (err) {
  console.log(err);
  }
}

export default EndCrawler;