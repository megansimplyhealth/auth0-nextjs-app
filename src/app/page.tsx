'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-apple-green-20 text-2xl">
          <p>Welcome, {user.name}!</p>
          <Link href="/dashboardHome/dashboardHome" className="m-16 text-3xl">
            Go to Dashboard Home
          </Link> 
          <a href="/api/auth/logout">Logout</a>
        </div>
        </>
      )}
    </div>
  );
}