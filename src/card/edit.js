import { TextControl } from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';

export const CardEdit = ({ className, attributes, setAttributes }) => {
	const { title, subtitle, content } = attributes;
	const onChange = key => event => {
		if (event && event.target) {
			setAttributes({ [key]: event.target.value });
		}
	};

	return (
		<div className={className}>
			<TextControl label="Card Title" value={title} onChange={onChange('title')} />
			<TextControl label="Card Subtitle" value={subtitle} onChange={onChange('subtitle')} />
			<RichText tagName="p" value={content} onChange={onChange('content')} />
		</div>
	);
};

export const CardSave = ({ className, attributes, ...props }) => {
	console.log(props)
	console.log(attributes);
	const { title, subtitle, content } = attributes;
	return (
		<div className={className}>
			<div className="card">
				<div className="card-body">
					{title &&
						<h5 className="card-title">
							{title}
						</h5>}
					{subtitle &&
						<h6 className="card-subtitle mb-2 text-muted">
							{subtitle}
						</h6>}
					<RichText.Content tagName="p" value={content} />
				</div>
			</div>
		</div>
	);
};
