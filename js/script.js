import {createMenu} from "./components/common/createMenu.js";
import {localhostUrl } from "./settings/localhostUrl.js";
import {displayMessage} from "./components/common/displayMessage.js";
import {getFavourites} from "./utils/localstorage.js";
import {findAuthor} from "./utils/findAuthor.js";

createMenu()

const articlesUrl = localhostUrl + "articles";

const inFavourites = getFavourites();

export async function createArticle() {
    const container = document.querySelector(".article-container");
    
    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();
        findAuthor(articlesUrl, container);

        container.innerHTML = "";
        
        json.forEach(function (article) {

            let changeIcon = "fa-save";
 
        const doesArticleExist = inFavourites.find(function (favourite) {      
            return parseInt(favourite.id) === parseInt(article.id);
            });
        
            console.log(inFavourites)
            console.log(doesArticleExist)


            if (doesArticleExist) {
                changeIcon = "fa-trash-alt";
            }
            
            container.innerHTML += `<div class="article">
                                        <div class="icon-container"><i class="icon fas ${changeIcon}" data-id="${article.id}" data-author="${article.author}" data-title="${article.title}"></i></div>
                                        <h3 >${article.title}</h3>
                                        <p data-summary="${article.summary}">${article.summary}</p>
                                        <p>Author: <span class="author-font">${article.author}<span></p>
                                    </div>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".article-container");
    }
    const addToFavourites = document.querySelectorAll(".article i");

    addToFavourites.forEach((button) => {
        button.addEventListener("click", handleClick);
});

function handleClick(event) {
    this.classList.toggle("fa-save");
    this.classList.toggle("fa-trash-alt");

    console.log(event);
    const id = this.dataset.id;
    const title = this.dataset.title;
    const author = this.dataset.author;

    const currentFavourites = getFavourites();

    const articleExists = currentFavourites.find(function (favourite) {
        return favourite.id === id;
    });

    if (articleExists === undefined) {
        const article = { id: id, title: title, author: author };
        currentFavourites.push(article);
        saveFavourites(currentFavourites);
    } else {
        const newFavourites = currentFavourites.filter((favourite) => favourite.id !== id);
        saveFavourites(newFavourites);
    }
    }
};

createArticle()

function saveFavourites(favourites) {
    localStorage.setItem("favourite", JSON.stringify(favourites));
}
