// Importação dos módulos
import { searchAcademies } from "./modules/searchAcademies.js";
import { ClearOptions } from "./modules/ClearOptions.js";

// Selecionando os botões
const ButtonSearch = document.querySelector(".find");
const ClearButton = document.querySelector(".clean");

// Adicionando eventos de clique aos botões
document.addEventListener("DOMContentLoaded", searchAcademies);
ButtonSearch.addEventListener("click", searchAcademies);
ClearButton.addEventListener("click", ClearOptions);
