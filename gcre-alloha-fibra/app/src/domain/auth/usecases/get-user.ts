import { AuthRepository } from "../auth-repository";

export class GetUserUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute() {
    return this.authRepo.getUser();
  }
}