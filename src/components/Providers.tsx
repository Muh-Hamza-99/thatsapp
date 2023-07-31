"use client";

import { Toaster } from "react-hot-toast";

type ProvidersProps = {
    children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
    </>
  );
};

export default Providers;