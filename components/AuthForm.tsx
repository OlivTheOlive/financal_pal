"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import CustomFormInput from "./CustomFormInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Form } from "./ui/form";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // sign up with appwrite and create plaid token

      if (type === "sign-up") {
        // const newUser = await signUp(data);
        // setUser(newUser);
      }
      if (type === "sign-in") {
        // const reponse = await SignIn({
        //   email: data.email,
        //   password: data.password,
        // });
        // if (reponse) {
        //   router.push("/");
        // }
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
          ></Image>
          <h1 className="text-26 font-ibm-plex-serif font-bold">
            Financial Pal
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? "Link Account "
              : type === "sign-in"
              ? "Sign In"
              : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get budgeting"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4"> {"Plaid Link"}</div>
      ) : (
        <>
          <Form {...form}>
            {type === "sign-up" && (
              <>
                <div className="flex gap-4">
                  <CustomFormInput
                    name={"firstName"}
                    control={form.control}
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                  <CustomFormInput
                    name="lastName"
                    control={form.control}
                    label="Last Name"
                    placeholder="Enter your last name"
                  />
                </div>

                <CustomFormInput
                  name={"address1"}
                  control={form.control}
                  label="Address"
                  placeholder="Enter your address"
                />
                <CustomFormInput
                  name={"city"}
                  control={form.control}
                  label="City"
                  placeholder="Enter your City"
                />
                <div className="flex gap-4">
                  <CustomFormInput
                    name={"state"}
                    control={form.control}
                    label="Province"
                    placeholder="Ex: Ontario"
                  />
                  <CustomFormInput
                    name={"postalCode"}
                    control={form.control}
                    label="Postal Code"
                    placeholder="Ex: A0A0A0"
                  />
                </div>
                <div className="flex gap-4">
                  <CustomFormInput
                    name={"dob"}
                    control={form.control}
                    label="Date Of Birth"
                    placeholder="yyyy-mm-dd"
                  />
                  <CustomFormInput
                    name={"sin"}
                    control={form.control}
                    label="SIN"
                    placeholder="Example: 000-000-000"
                  />
                </div>
              </>
            )}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomFormInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />

              <CustomFormInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;