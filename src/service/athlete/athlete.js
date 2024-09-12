  import fetch from "../../config/interceptor/interceptor";
  import { BaseUrl, APIS } from "../../config/constants/URLS";

  export const getAthleteById = (id) => {
    return fetch({
      method: "get",
      url: BaseUrl + APIS.ATHLETE.getAthleteById(id) ,
      headers: { "Content-Type": "application/json" }
    });
  };

  export const getAllAthletes = (pageNumber , sortedBy) => {
      return fetch({
        method: "get",
        url: BaseUrl + APIS.ATHLETE.getAllAthletes(pageNumber , sortedBy) ,
        headers: { "Content-Type": "application/json" }
      });
    };

  export const getAllCustomAthletes = (checkedColumns) => {
    return fetch({
      method: "get",
      url: BaseUrl + APIS.ATHLETE.getAllCustomAthletes(checkedColumns) ,
      headers: { "Content-Type": "application/json" }
    });
  };

  export const updateAthlete = (id , data) => {
      return fetch({
        method: "put",
        url: BaseUrl + APIS.ATHLETE.updateAthlete(id) ,
        data ,
        headers: { "Content-Type": "application/json" }
      });
    };

  export const deleteAthleteById = (id) => {
    return fetch({
      method: "delete",
      url: BaseUrl + APIS.ATHLETE.deleteAthleteById(id) ,
      headers: { "Content-Type": "application/json" }
    });
  };