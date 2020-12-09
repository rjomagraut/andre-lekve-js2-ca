import {createArticle} from "../script.js"

export function findAuthor(article, targetElement) {
    // get both search inputs
    const searchAuthors = document.querySelector("input#authors");

    // this is the function that both inputs will call on keyup
    function filterBooks(event) {
        // get the field data attribute
        const field = event.target.dataset.field;

        // if the author input is active clear the publisher input
     

        // get the trimmed, lowercased input value
        const searchValue = event.target.value.trim().toLowerCase();

        // filter the data array
        // use square brackets to get the object property by the field variable
        const filteredData = article.filter(function (author) {
            if (author[field].toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        // render new html
        createArticle(filteredData, targetElement);
    }

    searchAuthors.addEventListener("keyup", filterBooks);
   
}


