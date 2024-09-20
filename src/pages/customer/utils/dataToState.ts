import { ICustomer } from "../../../@types/customer";
import { IState } from "../components/CreateOrEditModal/types";

export default {
  dataToState: (data: ICustomer): IState => {
    return {
      ...data,
      ...data.address,
      dateOfBirth: "",
    };
  },
  stateToData: (data: IState): Omit<ICustomer, "id"> => {
    return {
      name: data.name,
      cpfCnpj: data.cpfCnpj,
      personType: data.personType,
      dateOfBirth: data.dateOfBirth,
      address: {
        cep: data.cep,
        city: data.city,
        number: data.number,
        province: data.province,
        state: data.state,
        street: data.street,
      },
      active: true,
    };
  },
};
