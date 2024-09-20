import { AxiosError } from "axios";
import { IPagination, IPaginationResponse } from "../../@types/pagination";
import { IRouter } from "../../@types/router";
import api from "../../shared/api";

export async function loadRoutersWithPagination(data: IPagination) {
  try {
    const response = await api.get<IPaginationResponse<IRouter>>(
      `/api/router?take=${data.take}&skip=${data.skip}`
    );
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<string>;
    if (response?.data) throw new Error(response.data);
    throw new Error("Erro desconhecido!");
  }
}

export async function createRouterService(data: IRouter) {
  try {
    const response = await api.post<IRouter>("/api/router", data);
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<string>;
    if (response?.data) throw new Error(response.data);
    throw new Error("Erro desconhecido!");
  }
}

export async function updateRouterService(data: IRouter) {
  try {
    const response = await api.put<IRouter>(`/api/router/${data.IP}`, data);
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<string>;
    if (response?.data) throw new Error(response.data);
    throw new Error("Erro desconhecido!");
  }
}

export async function disableRouterService(ip: string) {
  try {
    const response = await api.delete<IRouter>(`/api/router/${ip}`);
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<string>;
    if (response?.data) throw new Error(response.data);
    throw new Error("Erro desconhecido!");
  }
}
