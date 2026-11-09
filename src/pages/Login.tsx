import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    if (data.session) {
      navigate("/admin", { replace: true });
    }
  };

  return (
    <div className=" absolute w-full min-h-screen bg-bg text-text flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="max-w-md w-full bg-line/10 p-6 rounded-lg border border-line"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-bg border border-line rounded text-text focus:outline-none focus:border-accent"
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-2 bg-bg border border-line rounded text-text pr-10 focus:outline-none focus:border-accent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-text px-1"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-accent text-bg font-semibold rounded hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};
