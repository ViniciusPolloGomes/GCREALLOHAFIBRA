import { AuthRepository } from "../auth-repository";

export class LoginUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute(email: string, password: string) {
    const result = await this.authRepo.login(email, password);

    if (result.error) {
      throw new Error(result.error);
    }

    return result.user;
  }
}