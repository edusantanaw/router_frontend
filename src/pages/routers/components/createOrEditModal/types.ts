export type IAction<T> = { type: keyof T; value: T[keyof T] };

export type IRouterReducer = (state: IRouterState, action: IAction<IRouterState>) => IRouterState;

export type IRouterState = {
  IP: string;
  IPv6: string;
  brand: number;
  model: string;
  customers: string[];
};
