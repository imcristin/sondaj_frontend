import authHeader from './auth-header';
import axios from "axios";

// const API_URL = 'http://localhost:3000/api/poll/';
const API_URL = "http://51.68.188.213:3000/api/poll/";


class PollService {

    getActivePolls(){
        return axios.get( API_URL + "getallname",{ headers: authHeader() })
    }

    getPoll(pollid){
        return axios.get(API_URL+"getpoll/"+pollid+"/",{ headers: authHeader() })
    }

    postResponse(pollid){
        return axios.post(API_URL+"send/"+pollid+"/",{headers:authHeader()})
    }

    getResponses(pollid){
        return axios.get(API_URL+"getanswers/"+pollid+"/",{headers:authHeader()})
    }


}

export default new PollService();