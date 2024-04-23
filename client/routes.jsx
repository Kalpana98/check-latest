import React from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';
import { RootLayout } from './components/layout';
import { AboutUs } from './pages/about-us';
import { Home } from './pages/home';

export const routeElements = (
	<Route path='/' element={<RootLayout />}>
		<Route index element={<Home />} />
		<Route path='/about-us' element={<AboutUs />} />
	</Route>
);

export const routesCreated = createRoutesFromElements(routeElements);
