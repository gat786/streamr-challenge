import { useEffect } from "react";
import useAuthentication from "../Hooks/useAuthentication";

export default function Navbar() {
  const { authenticate, isAuthenticated, logout, signer, accountAddress } =
    useAuthentication();

  return (
    <nav className="flex justify-center h-24 bg-slate-500 text-zinc-100 w-full">
      <div className="flex justify-between items-center w-full pli-8 md:w-11/12 md:pli-0">
        <h1 className="text-2xl font-semibold">Streamr Products</h1>

        <div>
          {!isAuthenticated ? (
            <button
              className="border border-white  px-4 plb-2 rounded-lg text-base"
              onClick={authenticate}
            >
              Authenticate
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <p>{accountAddress?.toString()}</p>
              <button
                className="bg-black text-white px-4 plb-2 rounded-lg text-lg"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
