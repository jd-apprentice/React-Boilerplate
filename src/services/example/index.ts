import { ApiResponse } from "apisauce";
import { ExampleResponse } from "@/models/interfaces/types";
import { Api } from "../api/api";
import { getGeneralApiProblem } from "../api/api-problem";

export class ExampleApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async getExample() {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.get(
        `bank/random_bank`
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

  async postExample(payload: ExampleResponse) {
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

  async putExample(id: string, payload: ExampleResponse) {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.put(
        `your/route/${id}`, payload
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

  async deleteExample(id: string) {
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