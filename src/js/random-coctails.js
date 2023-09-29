import {fetchRandomCocktails} from '../js/utilities/fetch-data'
import { createCocktailCards } from "./utilities/render-gallery";
const randomGallery = document.querySelector('.gallery-list')

if(window.innerWidth>=1280){ 
  let render = await fetchRandomCocktails(9);
  createCocktailCards(render, randomGallery )
}else {
  let render = await fetchRandomCocktails(8);
  createCocktailCards(render, randomGallery )
}