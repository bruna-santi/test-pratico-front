import { Api } from './index';

class ChallengeApi extends Api {
    async getUsers() {
        const response = await this.axios.get(`/users`)
        return response.data;
    }

    async createUser(data: any) {
        const response = await this.axios.post(`/users`, data)
        return response.data;
    }

    async deleteUser(id: number) {
        const response = await this.axios.delete(`/users/${id}`)
        return response.data;
    }
}

export const challengeApi = new ChallengeApi();
