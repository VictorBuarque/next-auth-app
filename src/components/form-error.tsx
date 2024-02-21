import { FaExclamationCircle } from "react-icons/fa";

interface FormErrorProps {
    message?: string;
}

export const FormError =({
    message,
}: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/15 flex py-2 px-4 rounded-md justify-center items-center gap-x-2 text-sm text-destructive">
            <FaExclamationCircle className="h-6 w-5"/>
            <p>{message}</p>
        </div>
    )
}