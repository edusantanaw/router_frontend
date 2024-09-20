import axios from "axios";

type ICepResponse = {
  cep: string;
  logradouro: string;
  bairro: string;
  uf: string;
  localidade: string
};

export async function findCepService(cep: string) {
  try {
    const response = await axios.get<ICepResponse>(
      `https://viacep.com.br/ws/${cep}/json/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
