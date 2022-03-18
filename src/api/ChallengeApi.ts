import { Api } from './index';

class ChallengeApi extends Api {
    async getUsers() {
        const response = await this.axios.get(`/users`)
        return response.data;
    }

    async createUser(data: any) {
        const response = await this.axios.post(`/post`, data)
        return response.data;
    }
}

export const challengeApi = new ChallengeApi();
