import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

export const PublicRoutes = ({ user }) => {
  const location = useLocation();

  return !user ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;
};
