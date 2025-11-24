# GCRE-ALLOHA-FIBRA
GERENCIAMENTO DE CHAMADOS DE REDE EXTERNA

NODE.JS

NEXT.JS

CHAKRA UI

AXIOS

SUPABASE
# ⚡ Recursos Realtime do Supabase

- ✔ Escuta alterações no banco de dados  
- ✔ Envia eventos em tempo real para sua aplicação (via WebSocket)  
- ✔ Permite canais personalizados  
- ✔ Suporta presenças (quem está online)  
- ✔ Suporta broadcast entre clientes  
- ✔ Funciona 100% serverless  
- ✔ Não exige Redis, Socket.IO ou configuração manual  

---

# 🏗 Sistemas ideais para Supabase Realtime

- 📊 Dashboards em tempo real  
- 🎫 Sistemas de tickets / helpdesk  
- 💬 Chats  
- 📈 Monitoramento  
- 🔔 Notificações instantâneas  

---

# 🔑 Funcionalidades disponíveis

- 🛡 Autenticação  
- 🔗 Acesso ao banco  
- ⚡ Realtime  
- 🖥 SSR / Server Components  
- 🔒 RLS seguro  
- 💾 Persistência de sessão  

---

# ✅ Por que usar apenas Supabase

- Supabase já inclui um PostgreSQL completo  
- Você não precisa instalar PostgreSQL separado  
- Você não precisa configurar servidor de banco  
- Você não precisa pagar nada extra por um Postgres externo  
- Não precisa escolher entre Supabase e PostgreSQL  

> Ao usar o Supabase, você já está usando PostgreSQL (mesmo banco, mesma linguagem SQL)  

---

# 🟦 Supabase é basicamente

- PostgreSQL + um monte de recursos prontos

### Principais recursos:

- ✔ PostgreSQL rodando 100% real  
- ✔ Dashboard  
- ✔ Realtime  
- ✔ Auth  
- ✔ Storage  
- ✔ API REST  
- ✔ API GraphQL  
- ✔ Edge Functions  
- ✔ Backups  
- ✔ Logs  

---

# 🧠 Pense assim

- ➡ PostgreSQL é o motor  
- ➡ Supabase é o carro inteiro pronto pra dirigir
# Next.js 16 SSR + Supabase 2.x Authentication (Clean Architecture)

Este projeto implementa autenticação com **Supabase** no **Next.js 16** usando **Server-Side Rendering (SSR)**, seguindo princípios de **Clean Architecture**.

---

# 🗂 Estrutura do Projeto - SSR com Supabase 


<div style="display: flex;  align-items: flex-start; gap:30px";">
  <img width="30%" height="30%" alt="image" src="https://github.com/user-attachments/assets/31cc38f3-87bb-49c4-98e6-57534ee1370c" />
  <img width="30%" height="30%" alt="image" src="https://github.com/user-attachments/assets/bde77c38-1d85-48dc-8787-839c848a0cd0" />

</div>

---

## 1️⃣ `app/`

**Responsabilidade:** Interface do usuário, onde o usuário interage.

- **(auth)/login/page.tsx**  
  - Página de login com formulário que captura email e senha.  
  - Componentes: Input, Button, etc.  
  - Função: envia dados para Server Action em `actions.ts`.

- **(auth)/login/actions.ts**  
  - Server Action que recebe os dados do formulário.  
  - Chama casos de uso (`login`, `logout`, `getUser`).  
  - Atualiza cookies e realiza redirecionamentos após login.  

> Aqui o usuário interage e os dados fluem para os casos de uso no domínio.

---

## 2️⃣ `domain/auth/`

**Responsabilidade:** Regras de negócio e abstrações de autenticação.

- **auth-repository.ts**  
  - Interface `AuthRepository` com métodos:
    - `login(email, password)` → autentica usuário  
    - `logout()` → encerra sessão  
    - `getUser()` → retorna informações do usuário autenticado  

- **usecases/login.ts, logout.ts, get-user.ts**  
  - Implementam casos de uso chamando apenas `AuthRepository`.  
  - Encapsulam regras de negócio sem depender da implementação concreta (Supabase).  

> Contém regras de negócio desacopladas da implementação real.

---

## 3️⃣ `services/supabase/`

**Responsabilidade:** Implementação concreta da autenticação usando Supabase, garantindo SSR com cookies.

- **client/server.ts**  
  - Cria Supabase Client configurado para SSR.  
  - `cookieStore` → armazena cookies da requisição.  
  - `get(name)` → lê cookie pelo nome.  
  - `set(name, value, options)` → cria ou atualiza cookie.  
  - `delete(name)` → remove cookie (setando `maxAge=0`).  
  - Retorna client Supabase pronto para SSR.

- **auth/supabase-auth-repository.ts**  
  - Implementa `AuthRepository` usando client SSR.  
  - Funções:
    - `login(email, password)` → chama `supabase.auth.signInWithPassword`  
    - `logout()` → chama `supabase.auth.signOut`  
    - `getUser()` → chama `supabase.auth.getUser`  

> Sempre que um use case precisa autenticar, ele chama essas funções do repositório.

---

## 4️⃣ `components/`

**Responsabilidade:** Componentes de interface reutilizáveis.

- **Header.tsx**  
  - Componente fixo que aparece em todas as páginas.  
  - Exibe título e navegação.  

> Apenas UI, sem lógica de autenticação ou regras de negócio.

---

## 5️⃣ `styles/`

**Responsabilidade:** Temas e estilos globais da aplicação.

- **theme.ts**  
  - Define cores da empresa, fontes e configurações do Chakra UI.  
  - Usado pelo `ChakraProvider` em `_app.tsx`.  

> Define identidade visual da aplicação.

---

## 6️⃣ `pages/_app.tsx`

**Responsabilidade:** Ponto de entrada da aplicação.

- Aplica `ChakraProvider` com `theme` a todas as páginas.  
- Renderiza `Header` e `Component` da página atual.  
- Recebe `pageProps` vindos do SSR.  
- Não contém lógica de autenticação.  

> Configura tema global, layout base e renderiza páginas.

---

## 🔹 Fluxo de Autenticação SSR

## Fluxo resumido visual

onSubmit 

| Login Page | ------------------> | handleSubmit (Client)
| (page.tsx) | | Captura FormData
|
v

| loginAction |
| (Server Action) |
| Recebe FormData |
|
|
v
| LoginUseCase |
| (Domain / UseCase) |
| Executa regra de |
| negócio |
|
|
v
|
| SupabaseAuthRepository |
| (Service Layer / Repository)|
| Chama createSupabaseServer |
| e executa auth.signIn |
|
|
v
|
| createSupabaseServer|
| (Supabase Client SSR)|
| Configura cookies |
|
|
v
|
| Supabase Auth API |
| signInWithPassword |
|
user / error
|
|
v
| handleSubmit (Client)|
| Atualiza estado UI |
| Redireciona / mostra|
| erros |




---

## 🔹 Passo a Passo Detalhado do Fluxo de Login SSR

1️⃣ Usuário envia formulário em `page.tsx`.

2️⃣ Server Action em `actions.ts` recebe os dados do formulário.

3️⃣ Server Action chama o caso de uso (`login.ts`).

4️⃣ Caso de uso chama `supabase-auth-repository.ts`.

5️⃣ Repositório usa client SSR (`server.ts`) para autenticar com Supabase.

6️⃣ Supabase retorna `user` ou `error`.

7️⃣ Server Action manipula cookies e realiza redirecionamento, se necessário.

8️⃣ Página atualiza interface mostrando sucesso ou mensagem de erro.

## Observações

- O sistema **funciona totalmente em SSR**, usando cookies para autenticação.  
- Use cases permitem **testes unitários** sem precisar do Supabase.  
- Server Actions permitem integração limpa entre front-end e back-end sem expor dados diretamente.  
- Client Component lida apenas com estado e redirecionamento, mantendo a separação de responsabilidades.

---

## Configuração `tsconfig.json` (paths)

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```
Referências

Next.js 16 Server Actions

Supabase SSR Client

Clean Architecture Patterns

