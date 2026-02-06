import { httpClient } from "@/shared/api/httpclient";
import { PATH_URL } from "@/shared/api/httpclient";

export class CharacterApi {

  ENDPOINT = PATH_URL.ENDPOINT;

  async getCharacters(requestConfig) {
    const params = {};
    
    if (requestConfig?.name?.trim()) {
      params.name = `${encodeURIComponent(requestConfig.name)}`;
    } else {
      params.name = ''
    }
    try {
      const response = await httpClient.get(this.ENDPOINT, { params });
      return response
      // return {
      //   info: response.data.info,
      //   data: response.data.results || []
      // };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return response
        return {
          info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null
          },
          data: []
        };
      }
      throw error;
    }
  }

  async searchCharacters(query) {
    return this.getCharacters({ name: query });
  }
}