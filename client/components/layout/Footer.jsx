import React from 'react';
import { CopyrightIcon, FBIcon, IGIcon, XTwitterIcon, YTIcon } from '../icons';

const socialMediaLinks = [
	{ url: 'https://www.facebook.com', icon: <FBIcon /> },
	{ url: 'https://www.instagram.com', icon: <IGIcon /> },
	{ url: 'http://twitter.com', icon: <XTwitterIcon /> },
	{ url: 'https://www.youtube.com', icon: <YTIcon /> },
];

export function Footer() {
	return (
		<footer>
			<section>
				<p>Demo App</p>
			</section>
			<section>
				<p className='copyright'>
					<span className='copyright-icon'>
						<CopyrightIcon />
					</span>
					2024 Demo App
				</p>
			</section>
			<section>
				<ul className='social-media-icons'>
					{socialMediaLinks.map((link, index) => (
						<li key={index}>
							<a href={link.url}>{link.icon}</a>
						</li>
					))}
				</ul>
			</section>
		</footer>
	);
}
