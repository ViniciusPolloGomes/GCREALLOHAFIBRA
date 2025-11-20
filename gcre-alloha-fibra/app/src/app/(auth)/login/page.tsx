import { useState } from "react";
import { loginAction } from "./action";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await loginAction(formData);
      setError(null);
      // redirecionar ou atualizar estado do usuário
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}