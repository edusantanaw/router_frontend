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
