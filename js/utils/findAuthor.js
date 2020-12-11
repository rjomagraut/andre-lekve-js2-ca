import {createArticle} from "../script.js"


export function findAuthor(authors, container) {
    const search = document.querySelector("input#authors");
console.log(authors)
    search.onkeyup = function (event) {
        if(event.target.value == "") {
            createArticle(authors, container);
        }
        else {
            const searchValue = event.target.value.trim().toLowerCase();
            const filteredAuthors = authors.filter(function (search) {
            if (search.author.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });
            createArticle(filteredAuthors, container);
        }
        
    };
}console.log(createArticle);