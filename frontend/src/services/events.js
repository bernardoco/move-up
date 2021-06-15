import http from "../http-common"

class EventDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }

    get(id) {
        return http.get(`/id/${id}`);
    }

    find(query, by="sport", page=0) {
        return http.get(`?${by}=${query}&page=${page}`);
    }

    findRegistered(query, by="user_id", page=0) {
        console.log(query);
        return http.get(`?${by}=${query}&page=${page}`);
    }

    createEvent(data) {
        return http.post(`/event`, data);
    }

    deleteEvent(id) {
        return http.delete(`/event?_id=${id}`, {data:{_id: id}})
    }

    updateEvent(id, name, uid) {
        return http.put("/event", {_id: id, user_name: name, user_id: uid})
    }
}

export default new EventDataService();