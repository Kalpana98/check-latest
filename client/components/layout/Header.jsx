import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../icons';

export function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => setIsNavOpen(!isNavOpen);

	const navLinks = [
		{ to: '/', text: 'Home' },
		{ to: '/about-us', text: 'About' },
		{ to: '/services', text: 'Services' },
		{ to: '/contact', text: 'Contact' },
	];

	return (
		<header>
			<nav>
				<Link to='/' className='brand-title'>
					<div className='brand-logo'>
						<span>Logo</span>
					</div>
					<span>Text</span>
				</Link>
				<div className='menu-icon' onClick={toggleNav}>
					<MenuIcon />
				</div>
				<ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link to={link.to} onClick={() => setIsNavOpen(false)}>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
