import Axios from "axios";

export default class FilterService {
  constructor() {
    this.axios = Axios.create(
      {
        baseURL: 'http://localhost:8080',
        headers: {
          common: {
            'Content-Type': 'application/json'
          }
        }
      }
    );
  }

  static getInstance() {
    if (this.__instance == null) {
      this.__instance = new FilterService();
    }
    return this.__instance;
  }

  async fetchAllFilters() {
    try {
      const response = await this.axios.get(`/filters`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      throw err;
    }
  }

  async saveFilter(filter) {
    try {
      const response = await this.axios.post(`/filters`, filter);
      if (response.status === 201) {
        return response;
      }
    } catch (err) {
      throw err;
    }
  }

  async fetchFormProperties() {
    try {
      const response = await this.axios.get(`/filters/form-properties`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      throw err;
    }
  }
}
