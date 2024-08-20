import React from "react";
import { useAuth } from "../hooks/useAuth";
import LearningSituations from "./learningSituations";

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return <p>You need to log in to view this page.</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {auth.user.username}!</p>
      <button onClick={auth.logout}>Logout</button>
      <LearningSituations />
    </div>
  );
}
