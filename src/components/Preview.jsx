function Preview(props) {
	return (
		<div className="preview-container">
			<h3 className="content-h3">Preview</h3>
			<div className="content-container" id="preview" dangerouslySetInnerHTML={{__html: props.previewText}}>
			</div>
		</div>
	);
}

export default Preview;