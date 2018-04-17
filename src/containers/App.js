import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
		
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })

	}


	render(){
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		// Si no hay información o demora para cargar muestra animación de loading
		// si hay información la muestra
		return !robots.length ?
		(
			<div>	
				<h1 className="loadingTitle"> Loading </h1>
				<div class="cssload-square">
					<div class="cssload-square-part cssload-square-green"></div>
					<div class="cssload-square-part cssload-square-pink"></div>
					<div class="cssload-square-blend"></div>
				</div>
			</div>	
		)
		  
		  :
		  
	  (
			<div className='tc'>
				<h1 className='f1'>Robotic Search</h1>
				<SearchBox className= 'searchBox' searchChange={this.onSearchChange} />
				<br/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>	
		);	
	}
}

export default App;