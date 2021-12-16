import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import { useContext } from 'react';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';

export default function AppRouter() {
	const {isAuth, isLoading} = useContext(AuthContext)

	if(isLoading) {
		return <Loader />
	}

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} exect={route.exact} key={route.path}/>
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} exect={route.exact} key={route.path}/>
      ))}
    </Routes>
  );
}
