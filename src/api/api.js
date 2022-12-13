import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export const mainAPI = {
    getData(page) {
        return instance.get(`/character/?page=${page}`)
    },
    getCharacter(id){
        return instance.get(`/character/${id}`)
    },
    getEpisodes(id){
        return instance.get(`/episode/${id}`)
    },
    getEpisodeByCode(code){
        return instance.get(`/episode/?episode=${code}`)
    },
}