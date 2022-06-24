export const BASE_URL = "https://filmcatalog.backend.nomoredomains.xyz";

export const register = (password, email, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accent': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email, name })
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err))
};

export const authorization = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accent': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err))
}

export const getUserInfo = (JWT) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JWT}`
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err))

}

export const editProfile = (profileData, JWT) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accent': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${JWT}`
        },
        body: JSON.stringify({
            name: profileData.name,
            email: profileData.email
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err))
}


export const savedMovies = (movie, JWT) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Accent': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${JWT}`
        },
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err))
}

export const getMovies = (JWT) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Accent': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${JWT}`
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err))
}

export const deleteMovies = (cardID, JWT) => {
    return fetch(`${BASE_URL}/movies/${cardID}`, {
        method: 'DELETE',
        headers: {
            'Accent': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${JWT}`
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err))
}