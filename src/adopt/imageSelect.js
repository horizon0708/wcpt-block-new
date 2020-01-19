// edit.js

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } = wp.editor;
const { PanelBody, Button, ResponsiveWrapper, Spinner } = wp.components;
const { compose } = wp.compose;
const { select, withSelect } = wp.data;

const ALLOWED_MEDIA_TYPES = ['image'];

class ImageSelectorEdit extends Component {
	componentDidUpdate(prevProps) {
		const { attributes, setAttributes, bgImage } = this.props;
		if (prevProps.attributes.bgImage !== bgImage) {
			if (bgImage && bgImage.source_url) {
				setAttributes({
					...attributes,
					bgImage: bgImage.source_url
				});
			}
		}
  }
  
  onChange = key => event => {
    const { attributes, setAttributes } = this.props;
    setAttributes({
      ...attributes,
      [key]: event
    })
  }

	render() {
		const { attributes, setAttributes, bgImage, content} = this.props;
		const { bgImageId } = attributes;
		const instructions = (
			<p>
				{__('To edit the background image, you need permission to upload media.', 'image-selector-example')}
			</p>
		);
		const onUpdateImage = image => {
			setAttributes({
				...attributes,
				bgImageId: image.id,
				bgImage,
			});
		};

		const onRemoveImage = () => {
			setAttributes({
				...attributes,
				bgImageId: undefined,
				bgImage: undefined
			});
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Background settings', 'image-selector-example')} initialOpen={true}>
						<div className="wp-block-image-selector-example-image">
							<MediaUploadCheck fallback={instructions}>
								<MediaUpload
									title={__('Background image', 'image-selector-example')}
									onSelect={onUpdateImage}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									value={bgImageId}
									render={({ open }) =>
										<Button
											className={
												!bgImageId
													? 'editor-post-featured-image__toggle'
													: 'editor-post-featured-image__preview'
											}
											onClick={open}
										>
											{!bgImageId && __('Set background image', 'image-selector-example')}
											{!!bgImageId && !bgImage && <Spinner />}
											{!!bgImageId &&
												bgImage &&
												<ResponsiveWrapper
													naturalWidth={bgImage.media_details.width}
													naturalHeight={bgImage.media_details.height}
												>
													<img
														src={bgImage.source_url}
														alt={__('Background image', 'image-selector-example')}
													/>
												</ResponsiveWrapper>}
										</Button>}
								/>
							</MediaUploadCheck>
							{!!bgImageId &&
								bgImage &&
								<MediaUploadCheck>
									<MediaUpload
										title={__('Background image', 'image-selector-example')}
										onSelect={onUpdateImage}
										allowedTypes={ALLOWED_MEDIA_TYPES}
										value={bgImageId}
										render={({ open }) =>
											<Button onClick={open} isDefault isLarge>
												{__('Replace background image', 'image-selector-example')}
											</Button>}
									/>
								</MediaUploadCheck>}
							{!!bgImageId &&
								<MediaUploadCheck>
									<Button onClick={onRemoveImage} isLink isDestructive>
										{__('Remove background image', 'image-selector-example')}
									</Button>
								</MediaUploadCheck>}
						</div>
					</PanelBody>
				</InspectorControls>
				<div style={{ border: '1px solid grey', borderRadius: '6px', padding: '5px' }}>
					{/* {renderImage()} */}
					<h2> Adopt a Penguin Block</h2>
					{/* <RichText tagName="p" value={content} onChange={this.onChange("content")} /> */}
          <InnerBlocks />
				</div>
			</Fragment>
		);
	}
}

export const ImageSelectEdit = compose(
	withSelect((select, props) => {
		const { getMedia } = select('core');
		const { bgImageId } = props.attributes;

		return {
			bgImage: bgImageId ? getMedia(bgImageId) : null
		};
	})
)(ImageSelectorEdit);
