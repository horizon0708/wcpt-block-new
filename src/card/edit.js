const { InnerBlocks, MediaUploadCheck } = wp.editor;
const { TextControl } = wp.components;

export const CardEdit = ({ className, attributes, setAttributes }) => {
	const { title, subtitle, content } = attributes;
	const onChange = key => event => {
			setAttributes({ 
				...attributes,
				[key]: event }
				);
	};

	return (
		<div className={className} style={{ border: '1px solid grey', borderRadius: '6px', padding: '5px' }}>
			<TextControl label="Card Title" value={title} onChange={onChange('title')} />
			<TextControl label="Card Subtitle (Optional)" value={subtitle} onChange={onChange('subtitle')} />
			<InnerBlocks />
		</div>
	);
};

// attribute should probably be cannonical

export const CardSave = (props) => {
	const { title, subtitle, content } = props.attributes;
	return (
		<div className="wcpt-card">
			<div className="card">
				<div className="card-body">
						<h5 className="card-title">
							{title}
						</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							{subtitle}
						</h6>
						<InnerBlocks.Content />
					{/* <RichText.Content tagName="h2" value={content} /> */}
				</div>
			</div>
		</div>
	);
};
