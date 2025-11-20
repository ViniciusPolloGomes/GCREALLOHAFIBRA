import { AuthRepository } from "../auth-repository";

export class LogoutUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute() {
    return this.authRepo.logout();
  }
}