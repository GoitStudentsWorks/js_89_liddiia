import { favouritesMarkup } from "./utilities/render-favorite-coctales";
import { favorites, COCKTAIL_ID, deleteFromLocalStorage } from "./utilities/local-storage";
// import { refs } from './refs';
import { getCocktail } from "./utilities/fetch-data";
import { log } from "console";

const favoriteCocktailsList = document.querySelector('.interactive-section')

export const renderADrink = async(id)=>{
	try {
		const drink = await getCocktail(id);
		favouritesMarkup(drink, favoriteCocktailsList)
	} catch (error) {
		console.log(error);
	}
}

//взяти масив з локального сховища
let idsArray = JSON.parse(localStorage.getItem('favorites'));
if (favorites.length !== 0) {
 
  idsArray.forEach((item) => {
  renderADrink(item);
  console.log(item);
});
}

function removeIdFromLocalStorage(event) {
  if (event.target.classList.contains('.cocktail-rem-fav-btn')) {  
    const btn = event.target;
    const listItem = btn.closest('li');
    let cocktailId = listItem.dataset.id;
    deleteFromLocalStorage(cocktailId, favorites, COCKTAIL_ID);
  }
}

favoriteCocktailsList.addEventListener('click', removeIdFromLocalStorage);