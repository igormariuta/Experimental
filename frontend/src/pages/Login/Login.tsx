import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

interface ErrorData {
  message: string;
  statusCode?: number;
  error?: string;
  data?: Record<string, unknown>;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(
        process.env.REACT_APP_API + "/api/auth/local",
        {
          identifier: email,
          password: password,
        }
      );

      const { jwt, user } = response.data;

      updateUser({
        jwt,
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      });

      navigate("/");

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="p-8 rounded shadow-md bg-white w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-2xl font-bold">Log in</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isLoading ? (
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
            disabled
          >
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log in
          </button>
        )}
        {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
