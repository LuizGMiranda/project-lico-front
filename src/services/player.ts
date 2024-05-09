import { IPlayer } from "../views/Player";
import axios from "./axios";

export default class ServicePlayer {
   async getPlayers(): Promise<IPlayer[]> {
        const { data } = await axios.get('/player');
        return data;
     }

    async getPlayer(id: string): Promise<IPlayer> {
        const { data } = await axios.get(`/player/${id}`);
        return data;
    }

    async create(player: IPlayer): Promise<IPlayer> {
        const { data } = await axios.post('/player', player);
        return data;
    }

    async update(player: IPlayer): Promise<IPlayer> {
        const { data } = await axios.put(`/player/${player.id}`, player);
        return data;
    }
}