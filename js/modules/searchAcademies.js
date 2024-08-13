import { fetchApi } from "./fetchApi.js";
import { displayCount } from "./count.js";
import { academiesCards } from "./academiesCards.js";
import { filterAcademy } from "./filterAcademy.js";

 export const searchAcademies = async () => {
   
   

    const academies = await fetchApi();
    const academiesFilter = filterAcademy(academies);
  
    const closed = document.getElementById("closed");
  
    if (closed.checked) {
      displayCount(academies);
      academiesCards(academies);
    } else {
      displayCount(academiesFilter);
      academiesCards(academiesFilter);
    }
  
    
  };

