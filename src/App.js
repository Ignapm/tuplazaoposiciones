import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import ForgotPassword from "./components/forgotPassword";
import Login from "./components/login";
import { AuthProvider, useAuth } from "./hooks/useAuth";

// Componente que protege rutas que requieren autenticación
function PrivateRoute({ children }) {
  const auth = useAuth();

  return auth.user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Ruta por defecto redirige al login si no está autenticado */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
