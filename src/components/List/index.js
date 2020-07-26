import React from 'react';
import { message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
	ResultsGrid,
	ResultItem
} from './List.css'

function List(props) {
	const { results } = props;

	if (!results || results.length === 0) {
		return <p>No results.</p>
	}

	const handleCopyUrl = () => {
		message.info('Copied to clipboard!');
	};

	return (
		<ResultsGrid>
			{results.map((result) => (
				<ResultItem key={result.id}>
					<CopyToClipboard
						text={result.media[0].tinygif.url}
						onCopy={handleCopyUrl}
					>
						<img
							src={result.media[0].tinygif.url}
							alt={`${result.title} ${result.tags.join(', ')}`}
						/>
					</CopyToClipboard>
				</ResultItem>
			))}
		</ResultsGrid>
	)
};

export default List;
