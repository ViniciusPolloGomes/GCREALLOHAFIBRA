export interface AuthRepository {
  login(email: string, password: string): Promise<{ user: any | null; error: string | null }>;
  logout(): Promise<void>;
  getUser(): Promise<any | null>;
}