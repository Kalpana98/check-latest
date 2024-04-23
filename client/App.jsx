import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { routesCreated } from './routes';
import { store } from './store';
import './main.css';

const router = createBrowserRouter(routesCreated);

const ReactRouterProvider = <RouterProvider router={router} />;

export function App() {
	return (
		<Provider store={store}>
			<HelmetProvider>{ReactRouterProvider}</HelmetProvider>
		</Provider>
	);
}
