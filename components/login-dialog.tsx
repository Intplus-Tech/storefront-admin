import Image from "next/image";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/schemas/login-schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/check-box";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function LoginDialog() {
  const [currentStage, setCurrentStage] = useState("sign-in");
  const router = useRouter();
  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = () => {};

  return (
    <div>
      {
        <Card className="flex h-screen bg-gray-200 items-center justify-center">
          <CardContent>
            <div className="w-[500px] h-fit py-8 items-center flex-col justify-center flex bg-white rounded-md">
              <CardHeader>
                <Image
                  alt="Storefront Logo"
                  src="/assets/images/logo.png"
                  width={207}
                  height={212}
                  className="mx-auto"
                />
              </CardHeader>

              <CardDescription className="text-2xl my-4 font-semibold text-[#343434]">
                Sign In
              </CardDescription>
              <div className="w-[90%]  ">
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onSubmit)}>
                    <div className="w-full  flex flex-col  items-center justify-center space-y-3">
                      <FormField
                        control={loginForm.control}
                        name="email"
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
                                placeholder="Enter email address"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={loginForm.control}
                        name="password"
                        disabled={false}
                        render={({ field }) => (
                          <FormItem className="space-y-0 w-full">
                            <FormLabel className="text-base  text-[#343434]  text-muted-foreground font-semibold">
                              Password
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
                    <div className="flex items-center gap-2 my-4">
                      <Checkbox id="terms1" />
                      <label
                        htmlFor="terms1"
                        className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Keep me signed in
                      </label>
                    </div>
                    <CardFooter className="flex flex-col">
                      <Button className="w-full  my-4 text-white">
                        Sign In
                      </Button>
                      <div className="flex items-center justify-center">
                        <p
                          onClick={() => {
                            router.push("password-reset");
                            setCurrentStage("forgot-password");
                          }}
                          className="text-primary text-xs cursor-pointer"
                        >
                          Forgot your password?
                        </p>
                      </div>
                    </CardFooter>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
          ;
        </Card>
      }
    </div>
  );
}

export default LoginDialog;
