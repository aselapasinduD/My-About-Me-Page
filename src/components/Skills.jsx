/*
-This sections will have the my skills.
-And this skills display like a box with headline and details about skills.
-Ones you load the page this sections only display 3 or 4 skill box. it depend on screensize and device. but this have a arrow-heads left-side and right-side and if we click the arrow-heads the we can move skill-box left and right then will see more skills.
-This will not have active arrow-head. both sides are always active and this work like tthe wheel.
-If someone click on the skill-box this will load the resume page it will have a hole resume about me.

-how code structure goine on?
	-mean section will have div with className="skillsSection" it will carry all the	 nested code.
	-within div-className="skillsSection"
	  - 1.We have a h1 heding.
	  - 2.we need div-className="skills" to carry all the arrow-head and the
	      skill-boxs so we can easily animate and control athing together.
	  - 3.We adding a another div-className="skill" within a another 
	      div-className="skillsList" this .skill will be the one skill box and it
	      will repeat with id={skillName} and all .skill will carry .skillsList it
	      will help us to easily flex and animate this skill-boxs.
	  - 4.we will adding tow svg before and after div-className="skillsList"
	-Animation slide skill-box.
	 - 1..skillsList div use for produce window size and justify-content center.
	 - 2.we can use another div in side .skillsList div to flex skill-boxs
	     and animate the slide-card.
	 - 3.we can use js-objects and functions to get user inpute and change
	     the translate value and react with animate.
	 - 4.we can create some varibal to make any changes according to list of skills.
 */
import { React, useState } from 'react';
import Arrow_head from '../assets/images/Arrow_head.svg';

const Skills = () => {
	let defaultSkillBoxDisplayCount = 3;
	let allSkillBoxCount = 5;
	let translateAmountPx = 573;

	const [translateX, setTranslateX] = useState(0);
	const updateTranslateX = {
		translate: translateX,
		transition: 'translate 0.8s ease-in-out'
	}
	const slideCount = allSkillBoxCount - defaultSkillBoxDisplayCount;

	const handleLeftButtonClick = () => {
		if (translateX !== 0) {
			setTranslateX(translateX + translateAmountPx);
		}
		console.log(translateX);
	}
	const handleRightButtonClick = () => {
		if (translateX > -translateAmountPx * slideCount) {
			setTranslateX(translateX - translateAmountPx);
		}
		console.log(translateX);
	}
	
	return (
		<div id="skills" className="skillsSection">
			<h1>Skills</h1>
			<div className="skills-wrapper">
				<button className="left-button" onClick={handleLeftButtonClick}><img src={Arrow_head} class="arrow arrow-left" alt="Arrow Head" /></button>
				<button className="right-button" onClick={handleRightButtonClick}><img src={Arrow_head} class="arrow arrow-right" alt="Arrow Head" /></button>
				<div className="skillsList">
					<div className="translateXwrapper" style={updateTranslateX}>
						<div id="programming" className="skill">
							<h2>Programming 1</h2>
						</div>
						<div id="programming" className="skill">
							<h2>Programming 2</h2>
						</div>
						<div id="programming" className="skill">
							<h2>Programming 3</h2>
						</div>
						<div id="programming" className="skill">
							<h2>Programming 4</h2>
						</div>
						<div id="programming" className="skill">
							<h2>Programming 5</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
