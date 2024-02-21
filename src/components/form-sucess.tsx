import { FaCheckCircle } from "react-icons/fa";

interface FormSucessProps {
    message?: string;
}

export const FormSucess =({
    message,
}: FormSucessProps) => {
    if (!message) return null;

    return (
        <div className="bg-green-200 flex py-2 px-4 rounded-md justify-center items-center gap-x-2 text-sm text-green-500">
            <FaCheckCircle className="h-6 w-5"/>
            <p>{message}</p>
        </div>
    )
}