import React, { useState, useEffect } from 'react';
import { Linkedin, GitHub, WhatsApp, Instagram } from '../assets/social icons/social-icons.js';
import navbar_background from '../assets/images/navbar_background.png'

const NavBar = () => {
	const [isItemsMove, setIsItemsMove] = useState(false);
	const [isIconMove, setIsIconMove] = useState(false);

	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = [ "Programmer", "Web Developer", "Web Designer", "UI/UX Designer"];
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;

	const handleClick = (event) => {
		const clickedElementID = event.target.id;
		let clickedElementClass = event.target.closest('ul').className;
		if (clickedElementClass === "sections-bar") {
			if (clickedElementID === "About_me") {
				setIsItemsMove(false);
			} else if (clickedElementID === "Skills") {
				setIsItemsMove(true);
			} else if (clickedElementID === "Current_projects") {
				setIsItemsMove("select3");
			}
		}
		if (clickedElementClass === "sections-bar-icon") {
			if (clickedElementID === "Linkedin") {
				setIsIconMove("Linkedin");
			} else if (clickedElementID === "GitHub") {
				setIsIconMove("Github");
			} else if (clickedElementID === "WhatsApp") {
				setIsIconMove("Whatsapp");
			} else if (clickedElementID === "Instagram") {
				setIsIconMove("Instagram");
			}
		}
	}

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
			}, delta)
		return () => {
			clearInterval(ticker)};
			}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)
		
		setText(updatedText);

		if(isDeleting) {
			setDelta(prevDelta => prevDelta / 2);
			console.log("run", loopNum);
		}
		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(300);
		}
	}

	return (
	<nav class="navbar">
		<h2>Welcome to my portfolio</h2>
		<h1>{"Hi! I'm Asela "}<span class="wrap">{text}</span></h1>
		<img class="navbar_background" src={ navbar_background } alt="background image" />
		<div class="container">
			<div class="sections-bar-nav">
				<ul className="sections-bar">
					<li className="nav-Items" ><a id="About_me" onMouseOver={handleClick} onClick={handleClick} href="#" class="hover-effect">About Me</a></li>
					<li className="nav-Items" ><a id="Skills" onMouseOver={handleClick} onClick={handleClick} href="#" class="hover-effect">Skills</a></li>
					<li className="nav-Items"><a id="Current_projects" onMouseOver={handleClick} onClick={handleClick} href="#" class="hover-effect">Current <br /> Projects</a></li>
					<div class="second-wrapper">
						<span className={`select-nav-Items ${isItemsMove === true ? "move-select-Items" : isItemsMove === "select3" ? "move-select-Items3" : null }`}></span>
						<span className="Items-white select-nav-Items"></span>
					</div>
				</ul>
			</div>
			<div class="sections-bar-social">
				<ul className="sections-bar-icon">
					<li className="social-Icon Linkedin"><a href="#"><img id="Linkedin" onMouseOver={handleClick} onClick={handleClick} class="svg-color hover-effect" src={Linkedin} alt="Linkedin" /></a></li>
					<li className="social-Icon GitHub"><a href="#"><img id="GitHub" onMouseOver={handleClick} onClick={handleClick} class="svg-color hover-effect" src={GitHub} alt="GitHub" /></a></li>
					<li className="social-Icon WhatsApp"><a href="#"><img id="WhatsApp" onMouseOver={handleClick} onClick={handleClick} class="svg-color hover-effect" src={WhatsApp} alt="WhatsApp" /></a></li>
					<li className="social-Icon Instagram"><a href="#"><img id="Instagram" onMouseOver={handleClick} onClick={handleClick} class="svg-color hover-effect" src={Instagram} alt="Instagram" /></a></li>
					<div class="second-wrapper">
						<span className={`select-social-Icon ${isIconMove === "Linkedin" ? "select-social-Icon" : isIconMove === "Github" ? "move-social-Icon" : isIconMove === "Whatsapp" ? "move-social-Icon3" : isIconMove === "Instagram" ? "move-social-Icon4" : null }`}></span>
						<span className="Icon-white select-social-Icon"></span>
					</div>
				</ul>
			</div>
		</div>
	</nav>
	)
}

export default NavBar
