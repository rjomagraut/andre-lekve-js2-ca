import {getFavourites} from "./utils/localstorage.js";
import {displayMessage} from "./components/common/displayMessage.js";
import {createMenu} from "./components/common/createMenu.js";

createMenu()

let savedArticles = [];
savedArticles = getFavourites();

const favourites = getFavourites();

const favouritesContainer = document.querySelector(".article-container");

(async function favArray() {

try {favourites.forEach((favourite) => {
    favouritesContainer.innerHTML += `<div class="favourite">
                                            <div class="icon-container"><i class="icon fas fa-trash-alt" data-item="${favourite.title}"></i></div>
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

const removeFromFavourites = document.querySelectorAll(".icon-container");

removeFromFavourites.forEach(function (remove) {
        remove.addEventListener("click", removeFromArray);
});

})();


function removeFromArray(event) {
    console.log(event);

    const deleteThisarticle = event.target.dataset.item;
    
    const updatedFavourites = savedArticles.filter(function (favourite) {
        if (deleteThisarticle !== favourite) {
            return true;
        }
        console.log(updatedFavourites);
    });

    savedArticles = updatedFavourites;
}
