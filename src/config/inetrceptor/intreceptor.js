import React from "react";
import axios from "axios";
import { BaseUrl } from "../constants/URLS";

const Interceptor = ()=> {

    const Interceptor = axios.create({
        baseURL : BaseUrl ,
        timeout: 60000 //1 minute
    })

    const statusMessages = {
        400: "Bad Request",
        401: "Unauthorized",
        404: "Not Found",
        405: "Method Not Allowed",
        403: 'Token expired',
        408: "Request Timeout",
        409: "Conflict",
        415: "Unsupported Media Type",
        422: "Unprocessable Entity",
        429: "Too Many Requests",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required",
        499: "Client Closed Request",
    };

    const TOKEN_PAYLOAD_KEY = "Authorization";
    const tokenlessPaths = ["login", "register", "refresh"] ;
    Interceptor.interceptors.request.use(
        (config)=>{
            const AUTH_TOKEN = localStorage.getItem("token")
            const isTokenManagementRequest = tokenlessPaths.some(path => config.url.includes(path)) ; //true if tokenless pass exist
            
            config.headers[TOKEN_PAYLOAD_KEY] = null  ;
            if(!isTokenManagementRequest){
                const jwtToken = AUTH_TOKEN || null ;
                if(jwtToken){
                    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${jwtToken}`  ;
                }  
            }
            return config ;
        },
        (error) => {
            Promise.reject(error);
        }
        
    )
};

export default Interceptor ;