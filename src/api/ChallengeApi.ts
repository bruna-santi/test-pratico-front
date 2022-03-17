import { Api } from './index';

class ChallengeApi extends Api {
    async getUsers() {
        const response = await this.axios.get(`/users`)
        return response.data;
    }

    async getUser(id: number) {
        const response = await this.axios.get(`/users/${id}`)
        return response.data;
    }
}

export const challengeApi = new ChallengeApi();
