"use client";
import {
  FormContainer,
  FormWrapper,
  Btn,
  RegisterForm,
  RegisterInput,
  SignInContainer,
} from "@/styles/pages/register";
import { signUp } from "../../../firebase/auth/signUp";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

const RegisterSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

type RegisterInput = z.infer<typeof RegisterSchema>;

export default function Register() {
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  async function handleRegister(data: RegisterInput) {
    const { result, error } = await signUp(data.email, data.password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    reset();
    router.push("/");
  }

  return (
    <FormWrapper>
      <FormContainer>
        <SignInContainer>
          <h2>Bem vindo de volta!</h2>
          <p>
            Para se manter conectado com a gente, faça login com seu email e
            senha
          </p>
          <Link href={"/auth/login"}>Login</Link>
        </SignInContainer>
        <RegisterForm onSubmit={handleSubmit(handleRegister)}>
          <h2>Crie sua conta</h2>
          <RegisterInput
            type="text"
            placeholder="Crie um nome de usuario"
            required
            {...register("username")}
          />
          <RegisterInput
            type="email"
            placeholder="Digite seu email"
            required
            {...register("email")}
          />
          <RegisterInput
            type="password"
            placeholder="Crie uma senha"
            required
            {...register("password")}
          />
          <Btn type="submit">Cadastrar</Btn>
        </RegisterForm>
      </FormContainer>
    </FormWrapper>
  );
}
