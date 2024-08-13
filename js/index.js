// Importação dos módulos
import { searchAcademies } from "./modules/searchAcademies.js";
import { ClearOptions } from "./modules/ClearOptions.js";
import { searchForGyms } from "./modules/Gyms.js";
import { BackToTop } from "./modules/BackToTop.js";

// Selecionando os botões
const ButtonSearch = document.querySelector(".find");
const ClearButton = document.querySelector(".clean");


// Adicionando eventos de clique aos botões
document.addEventListener("scroll", BackToTop);
document.addEventListener("DOMContentLoaded", searchAcademies);
ButtonSearch.addEventListener("click", searchForGyms);
ClearButton.addEventListener("click", ClearOptions);
