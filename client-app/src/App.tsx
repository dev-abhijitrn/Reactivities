import React, { Component } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

import './App.css';

class App extends Component {
	state = {
		values: [],
	};

	componentDidMount() {
		axios.get('http://localhost:5000/api/values').then(response => {
			this.setState({
				values: response.data,
			});
		});
	}

	render() {
		return (
			<div className='App'>
				<Header as='h2' icon='plug' content='Uptime Guarantee' />
				<List>
					{this.state.values.map((v: any) => (
						<List.Item key={v.id}>{v.name}</List.Item>
					))}
				</List>
			</div>
		);
	}
}

export default App;
