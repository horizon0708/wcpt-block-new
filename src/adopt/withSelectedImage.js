const { compose } = wp.compose;

const { withSelect } = wp.data;
export const withBackgroundImage = component =>
	compose(
		withSelect((select, props) => {
			const { getMedia } = select('core');
			const { bgImageId } = props.attributes;

			return {
				bgImage: bgImageId ? getMedia(bgImageId) : null
			};
		})
	)(component);
