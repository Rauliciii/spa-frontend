import axios from 'axios';

const API_URL = "http://localhost:8080/api";

const customAxios = axios.create({
  withCredentials : true,
  baseURL : API_URL,
  timeout : 3000,
})

export default customAxios;


// // Create request, response & error handlers
// const requestHandler = request => {
//   return request;
// }

// const responseHandler = response => {
//   if (response.status === 401 || response.status ===403) {
//     EventBus.dispatch("unauthorized");
//   }
//   return response;
// }


// const errorHandler = error => {
//   if (error.response) {
//     if (error.response.status === 403) {
//       EventBus.dispatch("anauthorized");
//     }
//   }
//   return Promise.reject(error);
// }


// customAxios.interceptors.request.use(
//   (request) => requestHandler(request),
//   (error) => errorHandler(error)
// );

// customAxios.interceptors.response.use(

//   (response) => responseHandler(response),
//   (error) => errorHandler(error)
// )

// export default customAxios;
