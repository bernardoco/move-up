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

    createEvent(data) {
        return http.post("/event", data);
    }
}

export default new EventDataService();