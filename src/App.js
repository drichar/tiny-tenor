import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Menu } from 'antd';
import SearchForm from './components/SearchForm';
import List from './components/List';
import withListLoading from './components/withListLoading';
import './App.less';

import {
	Container,
	Logo,
	PageContainer
} from './App.css';

function App() {
	const ListLoading = withListLoading(List);

	const [searchText, setSearchText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [results, setResults] = useState(null);

	useEffect(() => {
		if( searchText.length > 0 ) {
			setIsLoading(true);

			let params = new URLSearchParams();
			params.append('q', searchText);
			params.append('key', process.env.REACT_APP_TENOR_API_KEY);
			params.append('limit', 20);

			const apiUrl = `https://api.tenor.com/v1/search?${params}`;

			axios.get(apiUrl)
				.then((response) => {
					setResults(response.data.results);
					setIsLoading(false);
				});
		}
	}, [searchText]);

	const { Header, Content, Footer } = Layout;

	return (
		<Container>
			<Header>
				<Logo>Tiny Tenor</Logo>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
				>
					<Menu.Item key="1">Search</Menu.Item>
				</Menu>
			</Header>
			<Content>
				<PageContainer>
					<SearchForm onSearch={(searchText) => setSearchText(searchText)} />
					{searchText.length > 0 && (
						<ListLoading isLoading={isLoading} results={results} />
					)}
				</PageContainer>
			</Content>
			<Footer>
				<p>Built by Doug Richar</p>
				<img
					src="//www.gstatic.com/tenor/web/attribution/PB_tenor_logo_blue_horizontal.svg"
					alt="powered by Tenor"
				/>
			</Footer>
		</Container>
	);
}

export default App;
