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
						key={result.id}
						text={result.media[0].tinygif.url}
						onCopy={handleCopyUrl}
					>
						<ResultItem
							imgWidth={result.media[0].tinygif.dims[0]}
							imgHeight={result.media[0].tinygif.dims[1]}
						>
							<img
								src={result.media[0].tinygif.url}
								width={result.media[0].tinygif.dims[0]}
								height={result.media[0].tinygif.dims[1]}
								alt={`${result.title}, ${result.tags.join(', ')}`}
							/>
						</ResultItem>
					</CopyToClipboard>
				))}
			</ResultsGrid>
		</InfiniteScroll>
	)
};

export default List;
