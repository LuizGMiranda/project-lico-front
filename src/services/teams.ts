import { ITeam } from "../views/Team";
import axios from "./axios";

export default class ServiceTeam {
    async getTeams() {
        try {
          const response = await axios.get('/team');
          console.log(response.data);
          return response.data;  
        } catch (error) {
           console.error(error);
           return []; 
        }
    }

    async create(data: ITeam) {
        try {
            const response = await axios.post('/team', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async update(data: ITeam) {
        try {
            const response = await axios.patch(`/team/${data.id}`, data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}