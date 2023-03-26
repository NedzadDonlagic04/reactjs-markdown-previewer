import './App.css';
import Preview from './components/Preview';
import Editor from './components/Editor';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useState } from 'react';

function App() {
	const [previewText, previewTextSetter] = useState('');

	const changeEventHandler = text => {
		const sanitizedText = DOMPurify.sanitize(text);

		const parsedText = marked.parse(sanitizedText.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,"").replace(/&gt;+/g, '>'), {
			breaks: true
		});

		previewTextSetter(parsedText);
	}

	return (
		<div className="app">
			<Editor onChange={changeEventHandler} />
			<Preview previewText={previewText}/>
		</div>
	);
}

export default App;