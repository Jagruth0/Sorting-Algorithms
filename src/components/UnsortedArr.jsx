import React,{useState} from "react";
import arr, {newArr} from "../Arr";
import Button from "@mui/material/Button";

function UnsortedArr() {
    const [array,setArray] = useState([...arr]);
    function generateArr() {
        setArray([...newArr()]);
    }

    return (
        <div className="container-ver">
            <h1>Unsorted Array</h1>
            <div className="container">
             <div className="arr container">
            {array.map((num, index) =><div style={{height: `${(num+1)*0.13}vh`}} key={index} className="data">{}</div>)}
             </div>
            </div>
            <Button variant="contained" className="button" onClick={() => {
                generateArr();
            }} type="button">Generate new Array</Button>
        </div>
    )
}

export default UnsortedArr;