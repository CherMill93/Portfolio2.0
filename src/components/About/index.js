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
				BIO
				</p>
				<p>
					Full stack project{' '}
					<a
						href="https://github.com/omarvalsam/Mental-Breakdown.git"
						target="_blank">
						develop
					</a>{' '}
					a{' '}
					<a
						href="Heroku link to project 2"
						target="_blank">
					</a>{' '}
					A task manager featuring user authentication, 
					collaborative user efforts, and more!
				</p>
				<p>
					Stats for Nerdz{' '}
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
				</p>
			</div>
		</section>
	);
}

export default About;
