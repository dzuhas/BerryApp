import { setCompanyName } from "./source/view-handler.js";
import { createList, setListListeners } from "./source/list-handler.js";

(async () => {
  try {
    const data = await fetch("config.json").then((res) => res.json());

    const { settings, assets } = data;

    const { company } = settings;
    const { pdfs } = assets;

    setCompanyName(company);
    createList(pdfs);
    setListListeners();
  } catch (error) {

    console.log(error);
  }
})();

 
