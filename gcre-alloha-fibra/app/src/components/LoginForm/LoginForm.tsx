// components/LoginForm.tsx
'use client'

import { 
  Box, 
  Button, 
  Flex, 
  Field, 
  Input, 
  Text, 
  Stack, 
  Heading,
  Link,
  Separator,
  createToaster
} from '@chakra-ui/react'
import { useState } from 'react'
import { loginAction } from '../../app/(auth)/login/action'



export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const toaster = createToaster()

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    
    try {
      const result = await loginAction(formData)
      
      if (result.success) {
        toaster.create({
          title: 'Login realizado!',
          description: 'Redirecionando...',
          type: 'success',
          duration: 3000,
        })
        
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 1000)
      } else {
        toaster.create({
          title: 'Erro no login',
          description: result.error,
          type: 'error',
          duration: 5000,
        })
      }
    } catch (error: any) {
      toaster.create({
        title: 'Erro inesperado',
        description: error?.message || 'Tente novamente mais tarde.',
        type: 'error',
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Flex 
      minH="100vh" 
      align="center" 
      justify="center" 
      bg="bg.subtle"
      px={4}
    >
      <Box
        width="full"
        maxW="400px"
        p={8}
        bg="bg.surface"
        borderRadius="xl"
        boxShadow="lg"
        borderWidth="1px"
        borderColor="border.subtle"
      >
        <Stack gap={6} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading as="h1" size="xl" fontWeight="bold" color="fg.emphasized" mb={2}>
              Bem-vindo
            </Heading>
            <Text color="fg.muted" fontSize="md">
              Faça login em sua conta
            </Text>
          </Box>

          {/* Login Form */}
          <form action={handleSubmit}>
            <Stack gap={4}>
              <Field.Root required>
                <Field.Label fontSize="sm" fontWeight="medium" color="fg.emphasized">
                  Email
                </Field.Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  size="lg"
                />
              </Field.Root>

              <Field.Root required>
                <Field.Label fontSize="sm" fontWeight="medium" color="fg.emphasized">
                  Senha
                </Field.Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Sua senha"
                  size="lg"
                />
              </Field.Root>

              <Button
                type="submit"
                width="full"
                size="lg"
                colorPalette="blue"
                loading={isLoading}
                mt={2}
                fontWeight="semibold"
                fontSize="md"
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
            </Stack>
          </form>

          <Separator />

          {/* Footer Links */}
          <Stack gap={3} align="center">
            <Link 
              href="/forgot-password" 
              colorPalette="blue" 
              fontSize="sm"
              fontWeight="medium"
            >
              Esqueceu sua senha?
            </Link>
            <Text fontSize="sm" color="fg.muted" textAlign="center">
              Não tem uma conta?{' '}
              <Link 
                href="/signup" 
                colorPalette="blue"
                fontWeight="medium"
              >
                Cadastre-se
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
}