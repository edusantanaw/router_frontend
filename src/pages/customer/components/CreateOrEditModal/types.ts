export type IAction<T> = { type: keyof T; value: T[keyof T] };

export type ICustomerReducer = (
  state: IState,
  action: IAction<IState>
) => IState;

export type IState = {
  name: string;
  cep: string;
  city: string;
  number: string;
  province: string;
  state: string;
  street: string;
  cpfCnpj: string;
  personType: number;
  dateOfBirth: string
};
