import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { type Session } from "@supabase/supabase-js";

export const ProtectedRoute = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 1. Check current session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // 2. Listen for login/logout events in real time
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    // 3. Clean up listener when component unmounts
    return () => subscription.unsubscribe();
  }, []);

  // While checking Supabase for a session, show a loading message
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-bg text-text flex justify-center items-center">
        <p className="text-muted">Checking authentication...</p>
      </div>
    );
  }

  // If no session exists, redirect to login page (or login route)
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // If session exists, render the protected child routes!
  return <Outlet />;
};
