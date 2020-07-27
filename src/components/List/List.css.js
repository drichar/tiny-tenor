import styled from 'styled-components';

export const ResultsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 1.5rem;
`;

export const ResultItem = styled.div`
	margin: 0 1.5rem 1.5rem 0;
	width: 220px;
	cursor: pointer;

	img {
		max-width: 100%;
	}
`;

export const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 1.5rem;
`;
