"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { PasswordResetSchema } from "@/app/schemas/new-password-schema";
import { Button } from "./ui/button";

function NewPasswordDialog() {
  const newPasswordForm = useForm<z.infer<typeof PasswordResetSchema>>({
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });
  const onSubmit = () => {};
  return (
    <div>
      <div className="flex h-screen bg-gray-200 items-center justify-center">
        <div className="w-[500px] h-fit py-8 items-center flex-col justify-center flex bg-white rounded-md">
          <Image
            alt="Storefront Logo"
            src="/assets/images/logo.png"
            width={207}
            height={212}
            className="mx-auto"
          />
          <h3 className="text-2xl my-4 font-semibold text-[#343434]">
            New Password
          </h3>
          <div className="w-[90%]  ">
            <Form {...newPasswordForm}>
              <form onSubmit={newPasswordForm.handleSubmit(onSubmit)}>
                <div className="w-full  flex flex-col  items-center justify-center space-y-3">
                  <FormField
                    control={newPasswordForm.control}
                    name="password"
                    disabled={false}
                    render={({ field }) => (
                      <FormItem className="space-y-0 w-full">
                        <FormLabel className="text-base text-[#343434] text-muted-foreground font-semibold">
                          Email
                        </FormLabel>
                        <FormControl className=" w-full">
                          <Input
                            type="text"
                            className="w-full focus: placeholder:text-[#989898] placeholder:font-light"
                            placeholder="Enter Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={newPasswordForm.control}
                    name="confirm_password"
                    disabled={false}
                    render={({ field }) => (
                      <FormItem className="space-y-0 w-full">
                        <FormLabel className="text-base  text-[#343434]  text-muted-foreground font-semibold">
                          Re-Enter New Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            className="w-full  placeholder:text-[#989898] placeholder:font-light"
                            placeholder="Enter password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>

          <div className="w-[90%]  ">
            <Button onClick={() => {}} className="w-full  my-4 text-white">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPasswordDialog;
