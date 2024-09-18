
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
        fetchAllEvents :(pageNumber,sortedBY ,type) => `/events?pageNumber=${pageNumber}&sortedBY=${sortedBY}&type=${type}`,
        updateEvent :(id) => `/events/${id}` ,
        deleteEventById : (id) => `/events/${id}`,
    },
    EVENTREGISTRATION :{
        registerAthleteToEvent : (eventId) => `/register_event/${eventId}`,
        getAllParticipants :(eventId) => `/register_event/${eventId}/participants` ,
        isAthleteRegistered : (eventId , athleteId) => `/register_event/is_registered/${eventId}/${athleteId}` ,
        deleteAthleteFromEvent : (eventId , athleteId) => `/register_event/admin/${eventId}/${athleteId}`
    },
    EVENTPERFORMANCE :{
        assignNoteEventToAthlete : (athleteId , eventId, note) => `/event_performance/${athleteId}/${eventId}?note=${note}`, 
        fetchAllAthleteNoteByEventId :(eventId)=> `/event_performance/event/${eventId}`,
        fetchAllNotesByAthleteId : (athleteId)=> `/event_performance/athlete/${athleteId}`,
        updateNoteEventOfAthlete :(athleteId , eventId)=> `/event_performance/${athleteId}/${eventId}`,
        deleteEventPerformance :(athleteId , eventId)=> `/event_performance/${athleteId}/${eventId}`,
    },
    ATHLETE :{
        getAthleteById : (athleteId) => `/athlete/${athleteId}`, 
        getAllAthletes :(pageNumber , sortedBy)=> `/athlete?pageNumber=${pageNumber}&sortingColumn=${sortedBy}`,
        getAllCustomAthletes : (checkedColumns)=> `/athlete/admin/custom?checkedColumns=${checkedColumns}`,
        updateAthlete :(athleteId)=> `/athlete/admin/${athleteId}`,
        deleteAthleteById :(athleteId)=> `/athlete/admin/${athleteId}`
    },
    FILE :{
        uploadFile :  '/files/upload_file' , 
        uploadMultipleFiles : '/files/upload_files' ,
        downloadFile : (formData) => `/files/download_file?fileName=${encodeURIComponent(formData)}` ,
        deleteFileById : (fielId) => `/files/${fielId}`
    } ,
    PERFORMANCE: {
        createPerformance:(athleteId) =>`/performance/${athleteId}` ,
        updatePerformance:(performanceId) =>`/performance/${performanceId}`  ,
        getPerformanceByAthleteId: (athleteId) =>`/performance/${athleteId}`,
        deletePerformanceById: (performanceId) =>`/performance/${performanceId}`,
    }

}