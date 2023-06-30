import React from 'react';
import selfImage from '../assets/images/Self-Image.jpg';

const Footer = () => {
	
	return (
		<div className="footerSection">
			<div className="pageDetails">
				<section className="selfImage">
					<img src={selfImage} alt="Asela Pasindu Image"/>
					<p>
						Hello I'm Asela.
					</p>
				</section>
				<section className="pageLinks">
					<h3>Pages</h3>
					<ul>
						<li>page1</li>
						<li>page2</li>
						<li>page3</li>
					</ul>
				</section>
				<section className="contacts">
					<h3>Contacts</h3>
					<ul>
						<li>contact1</li>
						<li>contact2</li>
						<li>contact3</li>
						<li>contact4</li>
					</ul>
				</section>
				<section className="form">
					<label name="fullName">Full Name</label>
					<label name="email">Email</label>
				<form className="contactForm" onSubmit="return confirm('Do you want to submit?')" action="https://formsubmit.co/9fab8c8ffa0ed330737b9d844f29af25" method="POST" >
					<input id="fullName" className="inputs" placeholder="Asela Pasindu" type="name" name="name" required />
					<input id="email" className="inputs" placeholder="email address" type="email" name="email" required />
					<textarea id="message" className="inputs" placeholder="typing..." type="text" name="message" required />
					<input id="send" className="inputs" value="Send" type="submit" />
					<input type="hidden" name="_subject" value="New submission Form My Portfolio Website" />
					<input type="hidden" name="_template" value="box" />
					<input type="hidden" name="_captcha" value="true" />
					<input type="hidden" name="_next" value="http://localhost:5173/" />
				</form>
				</section>
			</div>
			<hr />
			<span>
				<p className="copyrights">
					copyrights©AselaPasinduDias
				</p>
				<p className="date">
					4/7/2023
				</p>
			</span>
		</div>
	)
}

export default Footer
