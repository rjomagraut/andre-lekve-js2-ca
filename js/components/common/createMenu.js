export function createMenu() {
    const {pathname} = document.location;
console.log(pathname)
    const container = document.querySelector(".menu-container");

   
    container.innerHTML = `<div class="menu">
                                <a href="index.html" class="${pathname === "/index.html" ? "active" : ""}">Home</a>
                                <a href="favourites.html" class="${pathname === "/favourites.html" ? "active" : ""}">Favourites</a>
                        </div>`;
}
