export const BASE_URL = "http://localhost:3001";

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

export const getEmail = (JWT) => {
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

export const getName = (JWT) => {
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