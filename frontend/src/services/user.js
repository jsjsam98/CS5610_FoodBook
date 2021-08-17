import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get('');
  }

  find(query, by = "user_name") {
    return http.get(`?${by}=${query}`);
  }

  get(id){
    return http.get(`?user_id=${id}`);
  }

  getAllRecord(id){
    return http.get(`/record?user_id=${id}`);
  }

  deleteUser(userId) {
    return http.delete('', {data:{user_id: userId}})
  }

  createUser(data) {
    return http.post('',data)
  }

  createRecord(data) {
    return http.post("/record-new", data);
  }

  updateRecord(data) {
    return http.put("/record-edit", data);
  }


}

export default new UserDataService();
