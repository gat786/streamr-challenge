import { useEffect } from "react";
import useAuthentication from "../Hooks/useAuthentication";

export default function Navbar() {
  const { authenticate, isAuthenticated, logout, signer, accountAddress } =
    useAuthentication();

  return (
    <nav className="flex justify-between h-24 items-center pli-8 bg-slate-500 text-zinc-100">
      <h1 className="text-2xl font-semibold">Streamr Products</h1>

      <div>
        {!isAuthenticated ? (
          <button
            className="border border-white px-2 rounded-lg"
            onClick={authenticate}
          >
            Authenticate
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <p>{accountAddress?.toString()}</p>
            <button
              className="bg-black text-white px-2 rounded-lg"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
