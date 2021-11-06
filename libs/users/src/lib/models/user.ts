export interface User {
  _id?: string;
  name: string;
  password?: string;
  passwordConfirm?: string;
  email: string;
  phone: string;
  token?: string;
  isAdmin: boolean;
  street?: string;
  apartment?: string;
  zip?: string;
  city?: string;
  country?: string;
}
