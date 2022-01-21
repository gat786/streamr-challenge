import { useEffect } from "react";
import useAuthentication from "../Hooks/useAuthentication";

export default function Navbar() {
  const { authenticate, isAuthenticated, logout } = useAuthentication();

  useEffect(() => {
    console.log({ isAuthenticated });
  }, [isAuthenticated]);
  return (
    <div className="flex">
      <h1 className="text-2xl font-semibold">Streamr Products</h1>
      {!isAuthenticated ? (
        <button onClick={authenticate}>Authenticate</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}
