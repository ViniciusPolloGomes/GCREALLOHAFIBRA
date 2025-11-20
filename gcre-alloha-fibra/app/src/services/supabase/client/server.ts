import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Interface para cookies compatível com Supabase SSR
type CookieStore = {
  get: (name: string) => string | undefined;
  set: (name: string, value: string, options?: any) => void;
  delete: (name: string, options?: any) => void;
};

// ✅ Client SSR async
export async function createSupabaseServer() {
  const cookieStore = await cookies();

  const cookieMethods: CookieStore = {
    get: (name: string) => cookieStore.get(name)?.value,
    set: (name: string, value: string, options?: any) => cookieStore.set(name, value, options),
    delete: (name: string, options?: any) =>
      cookieStore.set(name, "", { ...options, maxAge: 0 }),
  };

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: cookieMethods,
    }
  );
}

// Funções de Auth
export async function login(email: string, password: string) {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user: data?.user ?? null, error: error?.message ?? null };
}

export async function logout() {
  const supabase = await createSupabaseServer();
  await supabase.auth.signOut();
}

export async function getUser() {
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user;
}