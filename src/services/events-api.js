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
    addOneEvent(event){
        return this.api.post("events/add", event)
        .then(response => response.data)
    }

    
    editOneEvent(event){
        return this.api.put('events/'+event.id, event)
        .then(response=> response.data)
    }
    
}

const apiService = new ApiService()

export default apiService