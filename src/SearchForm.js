import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function SearchForm() {
	const [form] = Form.useForm();
	const [searchText, setSearchText] = useState('');

	const onSearchTextChange = ({ searchText }) => {
		setSearchText(searchText);
	};

	return (
		<Form
			layout="inline"
			size="large"
			form={form}
			onValuesChange={onSearchTextChange}
		>
			<Form.Item value={searchText}>
				<Input placeholder="Search for GIFs" />
			</Form.Item>
			<Form.Item>
				<Button type="primary">Search</Button>
			</Form.Item>
		</Form>
	)
}

export default SearchForm;
