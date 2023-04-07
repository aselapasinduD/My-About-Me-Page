import React from 'react';
import selfImage from '../assets/images/Self-Image.jpg';

const Footer = () => {
	
	return (
		<div class="footerSection">
			<div class="pageDetails">
				<section class="selfImage">
					<img src={selfImage} alt="Asela Pasindu Image"/>
					<p>
						Hello I'm Asela.
					</p>
				</section>
				<section class="pageLinks">
					<h3>Pages</h3>
					<ul>
						<li>page1</li>
						<li>page2</li>
						<li>page3</li>
					</ul>
				</section>
				<section>
					<h3>Contacts</h3>
					<ul>
						<li>contact1</li>
						<li>contact2</li>
						<li>contact3</li>
						<li>contact4</li>
					</ul>
				</section>
				<section class="form">
					<label name="fullName">Full Name</label>
					<label name="email">Email</label>
				<form class="contactForm">
					<input id="fullName" class="inputs" placeholder="Asela Pasindu" type="name" />
					<input id="email" class="inputs" placeholder="email address" type="email" />
					<input id="massage" class="inputs" placeholder="Massage..." type="text" />
					<input id="send" class="inputs" value="send" name="Send" type="submit" />
				</form>
				</section>
			</div>
			<hr />
			<span>
				<p class="copyrights">
					copyrights©AselaPasinduDias
				</p>
				<p class="date">
					4/7/2023
				</p>
			</span>
		</div>
	)
}

export default Footer
