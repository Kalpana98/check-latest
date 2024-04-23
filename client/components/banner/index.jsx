import React from 'react';
import './style.css';

export function BannerImage({ url, alt, text }) {
	return (
		<div className='banner'>
			<img className='banner-image' src={url} alt={alt} />
			<h1 className='banner-text'>{text}</h1>
		</div>
	);
}
