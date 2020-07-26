import React from 'react';
import { Spin } from 'antd';

import {
	SpinnerContainer
} from './withListLoading.css';

function WithListLoading(Component) {
	return function LoadingComponent({ isLoading, ...props }) {
		if (!isLoading) {
			return <Component {...props} />;
		}

		return (
			<SpinnerContainer>
				<Spin size="large" />
			</SpinnerContainer>
		);
	}
}

export default WithListLoading;
