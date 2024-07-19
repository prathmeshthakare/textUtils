import React, {useState} from 'react'

function TextArea() {


    // convert to uppercase 
    const toUpper = ()=>{
        outText(inText.toUpperCase());
    }

    // for converting to lowercase 
    const toLower = ()=>{
        outText(inText.toLowerCase());
    }

    const [inText, outText] = useState("");

    return (
        <>
            <div className=" container my-5 ">
                <h1 className="my-3">Text Convertor </h1>
                <p className="my-2">Change your text case .....</p>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter your text here." value={inText} onChange={(e)=>{outText(e.target.value)}} ></textarea>
                <button className="btn btn-primary mt-4" onClick={toUpper} >UpperCase</button>
                <button className="btn btn-primary mt-4 ms-4" onClick={toLower} >LowerCase </button>
            </div>
        </>
    )
}

export default TextArea
