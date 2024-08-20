"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/login");
    }, 2000);
    return () => clearTimeout(redirect);
  }, [router]);
  return (
    <div className="flex h-screen flex-col  w-screen items-center justify-center">
      <Image
        alt="Storefront Logo"
        src="/assets/images/logo.png"
        width={207}
        height={212}
        className="mx-auto"
      />
      <Loader2 className="animate-spin text-primary font-bold"  />;
    </div>
  );
}
