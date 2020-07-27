import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
	ResultsGrid,
	ResultItem,
	SpinnerContainer
} from './List.css'

function List(props) {
	const { results, isLoading, onLoadMore, hasMore } = props;

	const loader = (
		<SpinnerContainer>
			<Spin size="large" />
		</SpinnerContainer>
	);

	const handleCopyUrl = () => {
		message.info('Copied to clipboard!');
	};

	if (isLoading) {
		return loader;
	}

	if (!results || results.length === 0) {
		return <p>No results.</p>
	}

	return (
		<InfiniteScroll
			dataLength={results.length}
			next={() => onLoadMore()}
			hasMore={hasMore}
			loader={loader}
		>
			<ResultsGrid>
				{results.map((result) => (
					<CopyToClipboard
						key={`${result.id}-${Date.now()}`}
						text={result.media[0].tinygif.url}
						onCopy={handleCopyUrl}
					>
						<ResultItem key={result.id}>
							<img
								src={result.media[0].tinygif.url}
								alt={`${result.title} ${result.tags.join(', ')}`}
							/>
						</ResultItem>
					</CopyToClipboard>
				))}
			</ResultsGrid>
		</InfiniteScroll>
	)
};

export default List;
