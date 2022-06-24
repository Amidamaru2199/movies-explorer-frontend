export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const getMovies = () => {
    return fetch(BASE_URL)
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err))

}