import { AdoptEdit, AdoptSave } from "./adopt";
import { ImageSelectEdit } from "./imageSelect";


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType('wcpt/adopt-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('wcpt - Adopt-a-penguin Block'), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('wcpt'), __('donate'), __('adop')],
	attributes: {
		content: {
			type: 'string',
		},
		bgImageId: {
      type: 'number',
    },
    bgImage: {
      type: "string"
    }
	},
  // edit: AdoptEdit,
	edit: ImageSelectEdit,
	save: AdoptSave
	// save: props => {
	// 	console.log(props);
	// 	return (
	// 		<div>
	// 			{props.attributes.title}
	// 		</div>
	// 	);
	// }
});