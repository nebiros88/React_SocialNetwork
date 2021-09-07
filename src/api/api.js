import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '226ad74c-8bba-4d51-a258-e44dbc65a0c1'
  }
})

export const  usersAPI = {
  getUsers(selectedPage = 1, usersPerPage = 10) {
    return instance.get(`users?page=${selectedPage}&count=${usersPerPage}`)
      .then(response => response.data);
  }
};

export const followAPI = {
  postFollow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data.resultCode);
  },
  deleteFollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data.resultCode);
  }
}