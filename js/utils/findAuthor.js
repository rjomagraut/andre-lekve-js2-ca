import {createArticle} from "../script.js"

export function findAuthor(article, container) {

    const searchAuthors = document.querySelector("input#authors");


    function filterArticles(event) {

        const getField = event.target.dataset.field;

        const searchValue = event.target.value.trim().toLowerCase();
    
        const filteredAuthors = article.filter(function (search) {
            if (search[getField].toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        createArticle(filteredAuthors, container);
    }

    searchAuthors.addEventListener("keyup", filterArticles);
   
}
