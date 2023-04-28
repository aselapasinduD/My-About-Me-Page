import React, { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import About_me from './components/About_me';
import Skills from './components/Skills'
import Current_Projects from './components/Current_Projects';
import Footer from './components/footer';

const App = () => {
	return (
	<div className="app">
		<NavBar />
		<About_me />
		<Skills />
		<Current_Projects />
		<Footer />
	</div>
	)
}

export default App
