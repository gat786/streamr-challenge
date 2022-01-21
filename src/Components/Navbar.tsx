import useAuthentication from "../Hooks/useAuthentication";

export default function Navbar() {
  const { authenticate } = useAuthentication();
  return (
    <div className="flex">
      <h1 className="text-2xl font-semibold">Streamr Products</h1>
      <button onClick={authenticate}>Authenticate</button>
    </div>
  );
}
