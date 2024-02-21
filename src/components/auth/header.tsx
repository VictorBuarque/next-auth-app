import { Roboto } from "next/font/google";
import { FcLock } from "react-icons/fc";

import { cn } from "@/lib/utils";

const font = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center">
        <div className="flex flex-row justify-center items-center">
        <FcLock className="h-10 w-10 -ml-10"/>
      <h1
        className={cn(
          "text-6xl font-semibold tex-white drop-shadow-md text-sky-500 text-center",
          font.className
        )}
      >
        Auth
      </h1>
      </div>
      <p className="pb-4">{label}</p>
    </div>
  );
};
