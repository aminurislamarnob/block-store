/**
 * Retrieves the translation of text.
 *
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 */
import { useBlockProps, RichText, AlignmentControl, BlockControls  } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } )
	}

	const onChangeAlign = ( newAlign ) => {
		setAttributes( { align: newAlign === undefined ? 'none' : newAlign } )
	}

	const { content, align } = attributes;

	return (
		<>
		<BlockControls>
			<AlignmentControl
				value={ align }
				onChange={ onChangeAlign }
			/>
		</BlockControls>
		<RichText 
		{ ...blockProps }
		tagName="p"
		onChange={onChangeContent}
		allowedFormats={ [ 'core/bold', 'core/italic' ] }
		value={ content }
		placeholder={ __( 'Write your text...' ) }
		style={ {textAlign: align} }
		/>
		</>
	);
}
