import React from 'react';
import { BannerImage } from '../../components/banner';
import { Link } from 'react-router-dom';

export function Home() {
	return (
		<main>
			<BannerImage url='/images/banner.jpg' text={'Banner Text'} />
			<section className='lessons'>
				<dl>
					<dt>
						<a href='lessons.html'>Lessons</a>
					</dt>
					<dd>Brief description of the lessons.</dd>
				</dl>
				<dl>
					<dt>
						<Link to='/'>Translator</Link>
					</dt>
					<dd>Brief description of the translator.</dd>
				</dl>
			</section>
			<section className='about'>
				<article>
					<h2>
						<Link to='/about-us'>About</Link>
					</h2>
					<p>Brief description of the app.</p>
				</article>
			</section>
			<section className='trending'> Carousel </section>
			<section className='write-to-us'> Form </section>
		</main>
	);
}
