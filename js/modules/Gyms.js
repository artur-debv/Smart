import { fetchApi } from "./fetchApi.js";
import { displayCount } from "./count.js";
import { academiesCards } from "./academiesCards.js";
import { filterAcademy } from "./filterAcademy.js";
import { filterGymsByTimeRange } from "./FilterGyms.js";
import { searchAcademies } from "./searchAcademies.js";

export const searchForGyms = async (event) => {

    event.preventDefault();

        searchAcademies();

        const inputRadioMorning = document.getElementById('morning');
        const inputRadioAfternoon = document.getElementById('afternoon');
        const inputRadioNight = document.getElementById('night');


        const academies = await fetchApi();
        const openGyms = filterAcademy(academies);

        let filteredGyms = openGyms;


        if (inputRadioMorning.checked || inputRadioAfternoon.checked || inputRadioNight.checked) {
            if (inputRadioMorning.checked) {
                filteredGyms = filterGymsByTimeRange(openGyms, '05:00', '12:00');
            } else if (inputRadioAfternoon.checked) {
                filteredGyms = filterGymsByTimeRange(openGyms, '12:01', '18:00');
            } else if (inputRadioNight.checked) {
                filteredGyms = filterGymsByTimeRange(openGyms, '18:01', '23:00');
            }

            console.log('Filtered Gyms:', filteredGyms);
            displayCount(filteredGyms);
            academiesCards(filteredGyms);
}
}