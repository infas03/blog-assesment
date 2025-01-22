
export interface User {
  id: number;
  username: string;
  role: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}