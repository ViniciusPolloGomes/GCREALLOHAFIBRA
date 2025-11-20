import { SupabaseAuthRepository } from "../../../services/supabase/auth/supabase-auth-repository";
import { LoginUseCase } from "../../../domain/auth/usecases/login";

export async function loginAction(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const repo = new SupabaseAuthRepository();
  const useCase = new LoginUseCase(repo);

  const user = await useCase.execute(email, password);
}