import {createArticle} from "../script.js"

export function findAuthor(authors, container) {
console.log(authors)
    const searchAuthors = document.querySelector("input#authors");

    function filterArticles(event) {

        const getField = event.target.dataset.field;

        const searchValue = event.target.value.trim().toLowerCase();
    
        const filteredAuthors = authors.filter(function (search) {
            if (search[getField].toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });
        
        createArticle(filteredAuthors, container);
    }

    searchAuthors.addEventListener("keyup", filterArticles);
   
}
