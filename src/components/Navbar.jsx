import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, GitHub, WhatsApp, Instagram } from '../assets/social icons/social-icons.js';

const NavBar = (scroll) => {
	{/*Navbar navigation varibals for create animation*/}
	const [isItemsMove, setIsItemsMove] = useState(false);
	const [isIconMove, setIsIconMove] = useState(false);
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

	{/*If Scroll Down to other sections will pop up Little navbar on the top of the window*/}
	const [isNavbarScroll, setNavbarScroll] = useState(false);
	const fixedNavbar = () => {
		if (window.scrollY > 650){
			setNavbarScroll(true);
		} else {
			setNavbarScroll(false);
		}
	}
	window.addEventListener("scroll", fixedNavbar);

	{/*Typing animation in Navbar Section*/}
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = [ "Programmer", "Web Developer", "Web Designer", "UI/UX Designer"];
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const period = 2000;
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

	const openMenu = useRef();
	const showMenuList = useRef();
	const showNavMenu = () => {
		openMenu.current.classList.toggle("Navmenu");
		showMenuList.current.classList.toggle("NavMenuItems");
	}

	return (
	<nav className="navbar">
		<h2>Welcome to my portfolio</h2>
		<h1>{"Hi! I'm Asela "}<span className="wrap">{text}</span></h1>
		<div ref={openMenu} onClick={showNavMenu} className="Navbutton">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div ref={showMenuList} className={`container ${isNavbarScroll === true ? "NavbarScroll": ""}`}>
			<div className={`sections-bar-nav ${isNavbarScroll === true ? "scrollTop" : ""}`}>
				<ul className="sections-bar">
					<li className="nav-Items" ><a id="About_me" onMouseOver={handleClick} onClick={handleClick} href="#aboutMe" className="hover-effect">About Me</a></li>
					<li className="nav-Items" ><a id="Skills" onMouseOver={handleClick} onClick={handleClick} href="#skills" className="hover-effect">Skills</a></li>
					<li className="nav-Items"><a id="Current_projects" onMouseOver={handleClick} onClick={handleClick} href="#currentProject" className="hover-effect">Current <br /> Projects</a></li>
					<div className="second-wrapper">
						<span className={`select-nav-Items ${isItemsMove === true ? "move-select-Items" : isItemsMove === "select3" ? "move-select-Items3" : null }`}></span>
						<span className="Items-white select-nav-Items"></span>
					</div>
				</ul>
			</div>
			<div className={`sections-bar-social ${isNavbarScroll === true ? "scrollTop" : ""}`}>
				<ul className="sections-bar-icon">
					<li className="social-Icon Linkedin"><a id="Linkedin" onMouseOver={handleClick} onClick={handleClick} href="https://www.linkedin.com/in/asela-pasindu-dias-55a7a7210/" target="blank"><img className="svg-color hover-effect" src={Linkedin} alt="Linkedin" /></a></li>
					<li className="social-Icon GitHub"><a id="GitHub" onMouseOver={handleClick} onClick={handleClick} href="https://github.com/aselapasinduD" target="blank"><img className="svg-color hover-effect" src={GitHub} alt="GitHub" /></a></li>
					<li className="social-Icon WhatsApp"><a id="WhatsApp" onMouseOver={handleClick} onClick={handleClick} href="https://wa.me/94789991578" target="blank"><img className="svg-color hover-effect" src={WhatsApp} alt="WhatsApp" /></a></li>
					<li className="social-Icon Instagram"><a id="Instagram" onMouseOver={handleClick} onClick={handleClick} href="https://www.instagram.com/asel_pasindu/" target="blank"><img className="svg-color hover-effect" src={Instagram} alt="Instagram" /></a></li>
					<div className="second-wrapper">
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
