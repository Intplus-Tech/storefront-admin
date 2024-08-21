"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordResetSchema } from "@/app/schemas/password-reset-schema";
import { Input } from "./ui/input";

function PasswordResetDialog() {
  const [currentStage, setCurrentStage] = useState(0);
  const passwordResetForm = useForm<z.infer<typeof passwordResetSchema>>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      email: "",
    },
  });
  const handleSubmitPassword = () => {};
  return currentStage === 0 ? (
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
          Password Reset
        </h3>
        <p className="text-[#898989] font-normal">Reset your password</p>
        <div className="w-[90%] ">
          <Form {...passwordResetForm}>
            <form
              onSubmit={passwordResetForm.handleSubmit(handleSubmitPassword)}
            >
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-0 w-full my-6">
                    <FormLabel className="text-base text-[#343434] text-muted-foreground font-semibold">
                      Email
                    </FormLabel>
                    <FormControl className=" w-full">
                      <Input
                        type="text"
                        className="w-full border border-none shadow-md shadow-primary  focus: placeholder:text-[#989898] placeholder:font-light"
                        placeholder="Enter Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <div className="w-[90%]  ">
          <Button
            onClick={() => {
              setCurrentStage(1);
            }}
            className="w-full  my-4 text-white"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  ) : currentStage === 1 ? (
    <div className="flex h-screen bg-gray-200 items-center justify-center">
      <div className="w-[500px] h-fit py-8 items-center flex-col justify-center flex bg-white rounded-md">
        <Image
          alt="Storefront Logo"
          src="/assets/images/envelope.png"
          width={150}
          height={140}
          className="mx-auto"
        />
        <h3 className="text-2xl my-4 font-semibold text-[#343434]">
          Almost There!
        </h3>
        <p className="text-[#898989] text-sm font-normal">
          Check your email inbox and confirm your account
        </p>
      </div>
    </div>
  ) : null;
}

export default PasswordResetDialog;
