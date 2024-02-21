import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-600">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold tex-white drop-shadow-md text-white text-center",
            font.className
          )}
        >
          Auth
        </h1>
        <p className="pb-4">A simple authentication service</p>
      </div>
      <div>
        <LoginButton >
          <Button variant="outline" size="lg">Login</Button>
        </LoginButton>
      </div>
    </main>
  );
}
