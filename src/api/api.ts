import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

const testApi = axios.create({
  baseURL: 'http://43.200.144.225:8181/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

export const getRestaurantLists = {
  get: () =>
    api.get('/restaurant').then((response) => {
      console.log(response.data);
      return response.data;
    }),
};

export const getPagingLists = {
  getListsByPaging: (pageNum: number) =>
    api
      .get(`/restaurant?_page=${pageNum}&_limit=25`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      }),
};

export const posts = {
  get: () => api.get('/posts'),
};

export const getTest = {
  get: () =>
    testApi
      .get('/test/restaurant?query=홍대 피자')
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      }),
};
