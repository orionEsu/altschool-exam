import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllRepos from './pages/AllRepos';
import SingleRepo from './pages/SingleRepo';
import Navbar from './components/Navbar/Navbar';
import Page404 from './pages/Page404';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/all-repos" element={<AllRepos />}>
					<Route path=":id/" element={<SingleRepo />} />
				</Route>

				<Route path="*" element={<Page404 />} />
			</Routes>
		</Router>
	);
};

export default App;
