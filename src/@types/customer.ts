export type IAddress = {
  state: string;
  city: string;
  cep: string;
  number: string;
  street: string;
  province: string;
};

export type ICustomer = {
  id: string;
  name: string;
  personType: number;
  cpfCnpj: string;
  dateOfBirth?: string;
  address: IAddress;
  createdAt?: Date;
  active: boolean;
};
