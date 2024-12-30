"use client";

import { ToastContainer } from "react-toastify";
import "@/app/variables.css"
import "react-toastify/dist/ReactToastify.css";
import "@/app/toastify.css"

const contextClass = {
  success: "bg-red-700",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right"
        pauseOnHover
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          "relative flex py-2.5 px-3.5 min-h-10 rounded-lg justify-between overflow-hidden cursor-pointer bg-input border border-stroke text-sm text-black mb-2"
        }
        style={{
          zIndex: 100002
        }}
        limit={3}
      />
    </>
  );
}

export default ToastProvider;
