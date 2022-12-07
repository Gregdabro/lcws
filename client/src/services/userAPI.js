import {$authHost, $host} from "./http.service"

export const registration = async (email, password) => {
    const response = await $host.post("api/auth/registration", {email, password, role: "ADMIN"})
    return response
}

export const login = async (email, password) => {
    const response = await $host.post("api/auth/login", {email, password})
    return response
}
