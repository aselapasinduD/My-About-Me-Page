import React from 'react';
import about_me from '../assets/images/About Me.png';

const About_me = () => {
	
	return (
		<div id="aboutMe" class="aboutMeSection">
			<h1>About Me</h1>
			<section class="details">
				<img src={about_me} alt="About Me Page" />
				<span>
					<h2>Hello there</h2>
					<p>My name is Asela, and I own VEBDRAKstudio. I have a wealth of web development experience. You may see some of the web development projects I worked on under the section titled "Current Projects." and I'm determined to develop an amazing website for you.</p>
				</span>
			</section>
			<section class="stories">
				<h2>Latest Stories</h2>
				<div class="storyBox">
					<div class="storyList">
						<span class="story">
							1
						</span>
						<span class="story">
							2
						</span>
						<span class="story">
							3
						</span>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About_me
