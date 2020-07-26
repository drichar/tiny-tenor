import styled from 'styled-components';
import { Layout } from 'antd';

export const Container = styled(Layout)`
	min-height: 100vh;

	.ant-layout-header {
		display: flex;
		justify-content: flex-start;
		height: 4rem;
    padding: 0 3rem;
    line-height: 4rem;
	}

	.ant-layout-content {
		padding: 0 3rem;
	}

	.ant-layout-footer {
		text-align: center;
	}
`;

export const Logo = styled.span`
	color: #fff;
	font-size: 1rem;
	font-weight: 700;
	margin-right: 1.5rem;
`;

export const PageContainer = styled.div`
	background: #fff;
  padding: 1.5rem;
  min-height: 20rem;
`;
