export function getFavourites() {
    const favourites = localStorage.getItem("favourite");

    if (favourites === null) {
        return [];
    } else {
        return JSON.parse(favourites);
    }
}

const jwtKey = "jwt";

export function saveJwt(jwt) {
    saveToLocalStorage(jwtKey, jwt);
}

export function getJwt() {
    return getFromLocalStorage(jwtKey);
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return null;
    }

    return JSON.parse(value);
}
