import {getFavourites} from "./utils/localstorage.js";
import {displayMessage} from "./components/common/displayMessage.js";
import {createMenu} from "./components/common/createMenu.js";

createMenu()

let favourites = getFavourites();

let clearButton = document.querySelector(".clear-button");

const favouritesContainer = document.querySelector(".article-container");

async function createFavourite() {

    favouritesContainer.innerHTML = "";

try {favourites.forEach((favourite) => {
    favouritesContainer.innerHTML += `<div class="favourite">
                                            <div class="icon-container"><i class="icon fas fa-trash-alt" data-id="${favourite.id}"></i></div>
                                            <h3>${favourite.title}</h3>
                                            <p>Author: <span class="author-font">${favourite.author}<span></p>
                                        </div>`;
});
    if (favourites.length === 0) {
    displayMessage("warning", "You have no favourites", ".article-container");
}

    
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".article-container");
    }

    const removeIcon = document.querySelectorAll(".icon-container");

    removeIcon.forEach(function (remove) {
            remove.addEventListener("click", removeFromFavourites);
});

};
createFavourite()

function removeFromFavourites(event) {
    console.log(event);

    const fetchFavourites = event.target.dataset.id;

    const updatedFavouriteList = favourites.filter(function (favourite) {
        if (fetchFavourites !== favourite.id) {
            return true;
        }
    });

    favourites = updatedFavouriteList;

    createFavourite()
}
  clearButton.forEach((button) => {
        button.addEventListener("click", );
    });

