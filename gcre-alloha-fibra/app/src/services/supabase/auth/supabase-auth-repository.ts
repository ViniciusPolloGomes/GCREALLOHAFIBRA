import { AuthRepository } from "../../../domain/auth/auth-repository";
import { createSupabaseServer } from "../client/server";

export class SupabaseAuthRepository implements AuthRepository {
  async login(email: string, password: string) {
    const supabase = await createSupabaseServer();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { user: data?.user ?? null, error: error?.message ?? null };
  }

  async logout() {
    const supabase = await createSupabaseServer();
    await supabase.auth.signOut();
  }

  async getUser() {
    const supabase = await createSupabaseServer();
    const { data, error } = await supabase.auth.getUser();
    if (error) return null;
    return data.user;
  }
}