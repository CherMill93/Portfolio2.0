import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				{/* <img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/> */}
			</div>
			<div>
				<p>
				Beginner Frontend Developer looking to expand my repotoire and knowlegde of React and other technologies. Likes reading, gaming, my cat Sopha, and all manner of food and drink!
				</p>
				<p>
					{' '}
					<a
						href="https://github.com/omarvalsam/Mental-Breakdown.git"
						target="_blank">
						Mental Breakdown:
					</a>{' '}
					A{' '}
					<a
						href="Heroku link to project 2"
						target="_blank">
					</a>{' '}
					task manager featuring user authentication, 
					collaborative user efforts, and more!
				</p>
				<p>
					{' '}
					<a
						href="https://chermill93.github.io/InteractiveFrontEndProject/"
						target="_blank">
						Stats for Nerdz:
					</a>{' '}
					{' '}
					<a
						href="Heroku link to project 2"
						target="_blank">
					</a>{' '}
					My team and I created a fun project that is used by gamers, 
					specifically Apex legends gamers. 
					They can use this app to list basic stats 
					to show them what they lack or need to improve.
				</p>
				{/* <p>
					Stats for Nerdz: {' '}
					<a
						href="https://github.com/CherMill93/InteractiveFrontEndProject.git"
						target="_blank">
					</a>{' '}
					a{' '}
					<a
						href="https://chermill93.github.io/InteractiveFrontEndProject/"
						target="_blank">
					</a>{' '}
					We have created a fun project that is used for gamers, 
					specifically Apex legends gamers. 
					They can use this app to list basic stats 
					to show them what they lack or need to improve.
				</p> */}
			</div>
		</section>
	);
}

export default About;
