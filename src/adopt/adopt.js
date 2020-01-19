import { withBackgroundImage } from './withSelectedImage';
import { getMediaUrl } from '../utils/getMedia';
import { RichText } from '@wordpress/block-editor';
const { select } = wp.data;
const { InnerBlocks} = wp.editor;

export const AdoptEdit = props => {
	return <div>Adopt a Penguin block</div>;
};

// const AdoptSaveComponent = props => {
	export const AdoptSave = props => {
    const { bgImage } = props.attributes
	return (
		<div className="adopt row" style={{ backgroundImage: `url("${bgImage}")` }}>
			<div className="empty-col clearfix col-sm-12 col-md-5 col-lg-7" />
			<div className="info col-sm-12 col-md-7 col-lg-5">
        <InnerBlocks.Content />
			</div>
		</div>
	);
};


// export const AdoptSave = withSelect((select, props) => {
// 	const { getMedia } = select('core');
// 	const { bgImageId } = props.attributes;

// 	return {
// 		bgImage: bgImageId ? getMedia(bgImageId) : null
// 	};
// })(AdoptSaveComponent);
