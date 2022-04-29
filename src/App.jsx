import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import otrok from './img/otrok.jpg';
import valentina from './img/Valentina.jpg';
import andrej from './img/Andrej.jpg';
import vasilij from './img/Vasilij.jpg';

export default function App() {
	return (
		<div className="wrap">
			<header className="header">
				<div className="header__icon">
					<img src={andrej} />
				</div>
				<div className="header__icon">
					<img src={otrok} />
				</div>
				<div className="header__icon">
					<img src={valentina} />
				</div>

				<div className="header__icon">
					<img src={vasilij} />
				</div>
			</header>
			<nav>
				<Link to="/invoices">Утренние молитвы</Link> 
				<Link to="/expenses">Вечерние молитвы</Link> 
				<Link to="/rules">Богородичное правило</Link> 
				<Link to="/rulls">Акафист отроку Вячеславу</Link>
			</nav>
			<Outlet />
		</div>
	);
}
