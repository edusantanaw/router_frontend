import { AxiosError } from "axios";
import { ICustomer } from "../../@types/customer";
import { IPagination, IPaginationResponse } from "../../@types/pagination";
import api from "../../shared/api";

export async function loadCustomersWithPagination(data: IPagination) {
  try {
    const response = await api.get<IPaginationResponse<ICustomer>>(
      `/api/customer?take=${data.take}&skip=${data.skip}`
    );
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<string>;
    if (response?.data) throw new Error(response.data);
    throw new Error("Erro desconhecido!");
  }
}

export async function createCustomerService(data: Omit<ICustomer, "id">) {
  try {
    const response = await api.post<ICustomer>("/api/customer", data);
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<string>;
    if (response?.data) throw new Error(response.data);
    throw new Error("Erro desconhecido!");
  }
}

export async function updateCustomerService(data: ICustomer) {
  try {
    const response = await api.put<ICustomer>(`/api/customer/${data.id}`, data);
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<string>;
    if (response?.data) throw new Error(response.data);
    throw new Error("Erro desconhecido!");
  }
}

export async function disableCustomerService(id: string) {
  try {
    const response = await api.delete<ICustomer>(`/api/customer/${id}`);
    return response.data;
  } catch (error) {
    const { response } = error as AxiosError<string>;
    if (response?.data) throw new Error(response.data);
    throw new Error("Erro desconhecido!");
  }
}
