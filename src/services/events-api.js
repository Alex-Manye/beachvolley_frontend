import axios from "axios";

//MIRAR AUTH-SERVICE con EVENTS SERVICE

class ApiService {
    constructor(){
        this.api = axios.create({
            baseURL: 'http://localhost:4000/',
            withCredentials: true  //para la cookie
        })
    }

    getAllEvents(){
        return this.api.get('events')
        .then(response => response.data)
    }

    getOneEvent(eventId){
        return this.api.get('events/'+eventId)
        .then(response => response.data)
    }

    deleteOneEvent(eventId){
        return this.api.delete('events/'+eventId)
        .then(response => response.data)
    }
}

const apiService = new ApiService()

export default apiService