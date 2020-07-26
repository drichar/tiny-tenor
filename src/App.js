import React from 'react';
import { Layout, Menu } from 'antd';
import SearchForm from './SearchForm';
import './App.less';

import {
	Container,
	Logo,
	PageContainer
} from './App.css';

function App() {
	const { Header, Content, Footer } = Layout;

  return (
    <Container>
			<Header>
				<Logo>Tiny Tenor</Logo>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
					<Menu.Item key="1">Search</Menu.Item>
					<Menu.Item key="2">Sign In</Menu.Item>
					<Menu.Item key="3">Sign Up</Menu.Item>
				</Menu>
			</Header>
			<Content>
				<PageContainer>
					<SearchForm />
				</PageContainer>
			</Content>
			<Footer>Ant Design ©2018 Created by Ant UED</Footer>
		</Container>
  );
}

export default App;
