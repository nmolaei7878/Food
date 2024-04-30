import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    devErrorLogger(error)
    return Promise.reject(error);
  }
);
export default api;


const devErrorLogger = error => {
  if ("production" !== process.env.NODE_ENV) {

    if (error.request) {
      console.log(
        `%cRequest error: %c${error?.request} `,
        `color: #FF0000; font-size: 15px;`,
        'background-color: #fff2; padding: 4px;',
      );
    }

      else if (error.response) {
        console.log(
          `%cResponse error: %c${error?.response.data} %c${error?.response.status} %c${error?.response.headers} `,
          `color: #FF0000; font-size: 15px;`,
          'background-color: #fff2; padding: 4px;',
        );
        
      }
 else{
        console.log(
          `%cError: %c${error?.message} `,
          `color: #FF0000; font-size: 15px;`,
          'background-color: #fff2; padding: 4px;',
        );
      }
  }
}