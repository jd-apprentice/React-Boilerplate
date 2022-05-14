import { ApiResponse } from "apisauce";
import { Api } from "./api";
import { getGeneralApiProblem } from "./api-problem";

export class ExampleApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async getExample(): Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.get(
        `your/route`
      );
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const { data } = response;
      return data;
    } catch (e) {
      return { kind: "bad-data" };
    }
  }

  async postExample(payload: any):  Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.post(
        `your/route`, { payload }
      );
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const { data } = response;
      return data;
    } catch (e) {
      return { kind: "bad-data" };
    }
  }

  async putExample(id: any):  Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.put(
        `your/route/${id}`
      );
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const { data } = response;
      return data;
    } catch (e) {
      return { kind: "bad-data" };
    }
  }

  async deleteExample(id: any):  Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.delete(
        `your/route/${id}`
      );
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const { data } = response;
      return data;
    } catch (e) {
      return { kind: "bad-data" };
    }
  }
  
}


