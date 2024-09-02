import React from "react";

export const BaseUrl = "http://localhost:8082/api/v1";


export const APIS ={
    AUTH: {
        login: '/auth/login',
        register: '/auth/register',
        logout: '/auth/logout',
        refreshToken: '/auth/refresh',
    }
}