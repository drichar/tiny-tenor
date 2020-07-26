import React from 'react';
import { Form, Input, Button } from 'antd';

function SearchForm(props) {
	const{
		onSearch
	} = props;

	const handleSubmit = ({ searchText }) => {
		onSearch(searchText);
	};

	return (
		<Form
			layout="inline"
			size="large"
			onFinish={handleSubmit}
		>
			<Form.Item name="searchText">
				<Input placeholder="Search for GIFs" />
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
				>
					Search
				</Button>
			</Form.Item>
		</Form>
	)
}

export default SearchForm;
