import React, {useState} from 'react'

export default function TextForm(props) {
    const setCopyText = ()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }
    const setUpCase = () =>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    }
    const setLowCase = () =>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success");
    }
    const setClearText = () =>{
        setText("");
        props.showAlert("All text cleared","success");
    }
    const changeText = (event) => {
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{backgroundColor: props.mode==='dark'?'#0c3965':'white',color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={changeText} style={{backgroundColor: props.mode==='dark'?'rgb(5 26 47)':'white',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={setUpCase} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={setLowCase}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={setCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={setClearText}>Clear Text</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
