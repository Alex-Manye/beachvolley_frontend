import axios from "axios";

//MIRAR AUTH-SERVICE con EVENTS SERVICE

class ApiService {
    constructor(){
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URI,
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

    joinOneEvent(userId, eventId){
        return this.api.put(`events/joinOneEvent/${eventId}`, userId)
        .then((response)=> {
            console.log('response in api', response.data);
            return response.data
        })

    }
    
}

const apiService = new ApiService()

export default apiService