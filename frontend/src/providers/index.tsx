import ToastProvider from "./toast";

interface Props {
  children: React.ReactNode;
}

export default function Provider({ children }: Props) {
  return <ToastProvider>{children}</ToastProvider>;
}
