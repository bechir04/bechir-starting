
export const BaseUrl = "http://localhost:8082/api/v1";


export const APIS ={
    AUTH: {
        login: '/auth/login',
        register: '/auth/register',
        logout: '/auth/logout',
        refreshToken: '/auth/refresh',
    },
    ANNOUNCEMENT: {
        createAnnouncement : `/announcements`,
        fetchAnnouncement :(id) => `/announcements/${id}`,
        fetchAllAnnouncements:(pageNumber ,sortedBy ) => `/announcements?pageNumber=${pageNumber}&sortedBy=${sortedBy}`,
        updateAnnouncement:(id) => `/announcements/${id}`,
        deleteAnnouncement:(id) => `/announcements/${id}`
    },
    EVENT :{
        createEvent :'/events',
        fetchEvent :(id) => `/events/${id}` ,
        fetchAllEvents :(pageNumber,sortedBY) => `/events/page/${pageNumber}?sortedBY=${sortedBY}`,
        updateEvent :(id) => `/events/${id}` ,
        deleteEventById : (id) => `/events/${id}`
    } 
}