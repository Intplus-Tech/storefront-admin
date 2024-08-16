"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "@/app/components/loader/Loader";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("/login");
    }, 2000);

    return () => clearTimeout(redirectTimeout);
  }, [router]);
  return (
    <div className="flex h-screen  w-screen items-center justify-center">
      <Loader />;
    </div>
  );
}
