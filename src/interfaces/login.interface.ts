export interface ILoginRes {
  email: string;
  first_name: string;
  last_name: string;
  auth_token: string;
}

export interface ILogin {
  user: {
    email?: string;
    password?: string;
  };
}
