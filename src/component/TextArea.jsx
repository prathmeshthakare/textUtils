import React, { useState } from 'react'

function TextArea() {

    const toUpper = () => {
        outText(inText.toUpperCase());
    }

    const toLower = () => {
        outText(inText.toLowerCase());
    }

    const [inText, outText] = useState("");
    return (
        <>
            <div className=" container my-5 ">
                <h2 className="my-3">Enter the text to analyze  </h2>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter your text here." value={inText} onChange={(e) => { outText(e.target.value) }} ></textarea>

                <div className="container text-center ">
                    <button className="btn btn-success mt-4" onClick={toUpper} >UpperCase</button>
                    <button className="btn btn-danger  mt-4 ms-4" onClick={toLower} >LowerCase </button>
                </div>

            </div>

            <div className="container my-5">
                <h4>Text Summary </h4>
                <p>{inText.split(" ").length} Words and {inText.length} Charectors.</p>
            </div>
        </>
    )


}

export default TextArea
