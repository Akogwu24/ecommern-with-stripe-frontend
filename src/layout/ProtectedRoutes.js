import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoutes = ({ user }) => {
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
