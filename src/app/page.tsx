import { signOut } from "next-auth/react";

const HomePage = () => {
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  );
};

export default HomePage;