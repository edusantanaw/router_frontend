export type IRouter = {
  IP: string;
  IPv6: string;
  brand: Brand;
  model: string;
  active?: boolean;
  customers: string[];
};

export enum Brand {
  "Huawei",
  "Cisco",
  "Mikrotik",
  "Juniper",
}
