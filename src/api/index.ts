import axios from 'axios';

export class Api {
    baseURL;
    axios;

    constructor() {
        this.baseURL = `https://jsonplaceholder.typicode.com/`;

        this.axios = axios.create({baseURL:this.baseURL});
    }
}

export default new Api();