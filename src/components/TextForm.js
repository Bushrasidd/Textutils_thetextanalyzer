import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Upper case was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleLoClick = ()=>{
      // console.log("Upper case was Clicked" + text);
       let newText = text.toLowerCase();
       setText(newText)

   }


    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value)
    
    }
    const [text, setText] = useState('');
    //text="new text";   //wrong way to change the state
    //setText("new text");//Correct way to change the state
 return (
  <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to Uppercase</button>

        <button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to LowerCase</button>
     
    </div>
    <div className="container my-3">
      <h2>your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>


    </div>
  

  </>
      
    
  )
}
