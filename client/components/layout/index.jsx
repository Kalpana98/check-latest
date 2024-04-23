import React from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function RootLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
