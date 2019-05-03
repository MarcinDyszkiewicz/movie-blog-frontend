export function getToken() {
    return window.localStorage.getItem("token");
}

export function login(token) {
    window.localStorage.setItem("token", token)
}