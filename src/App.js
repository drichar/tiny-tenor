import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Menu, BackTop } from 'antd';
import SearchForm from './components/SearchForm';
import List from './components/List';
import './App.less';

import {
	Container,
	Logo,
	PageContainer
} from './App.css';

function App() {
	const [searchText, setSearchText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [results, setResults] = useState(null);
	const [nextPosition, setNextPosition] = useState(0);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		if( searchText.length > 0 ) {
			// reset hasMore
			setHasMore(true);

			setIsLoading(true);

			const apiUrl = getApiUrl(searchText);

			axios.get(apiUrl)
				.then(({ data }) => {
					setResults(data.results);

					handleNext(data.next);

					setIsLoading(false);
				});
		}
		else {
			setResults([]);
		}
	}, [searchText]);

	const handleLoadMore = () => {
		const apiUrl = getApiUrl(searchText, nextPosition);

		axios.get(apiUrl)
			.then(({ data }) => {
				setResults([
					...results,
					...data.results
				]);

				handleNext(data.next);

				setIsLoading(false);
			});
	};

	const getApiUrl = (searchText, pos) => {
		let params = new URLSearchParams();
		params.append('q', searchText);
		params.append('key', process.env.REACT_APP_TENOR_API_KEY);
		params.append('limit', 20);
		params.append('media_filter', 'minimal');

		if (pos) {
			params.append('pos', pos);
		}

		return `https://api.tenor.com/v1/search?${params}`;
	};

	const handleNext = (next) => {
		if (next) {
			setNextPosition(next);
		}
		else {
			setHasMore(false);
		}
	};

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
						<List
							isLoading={isLoading}
							results={results}
							onLoadMore={handleLoadMore}
							hasMore={hasMore}
						/>
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
			<BackTop />
		</Container>
	);
}

export default App;
