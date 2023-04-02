import React, {useState} from 'react'

export default function TextFrom(props) {

  const handleUpClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    // setText('You have clicked on the handleUpClick');
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }

  const handleCopy = () => {
    // console.log('text copied')
    let text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    console.log('spaces removed');
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  }

  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text = 'swdhjkb' //wrong way to change the state
  // setText('dsnjksdb') // correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#04224d'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#04224d'}}  id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#04224d'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here..."}</p>
    </div>
    </>
  )
}
