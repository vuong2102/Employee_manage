import { AccountBank } from "./account-bank";

export interface Employee {
  id: number;
  username: string;
  address: string;
  email: string;
  phoneNumber: string;
  position: string;
  password: string;
  role: string;
  accountBanks: AccountBank [];
}



