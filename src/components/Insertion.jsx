import React, { useEffect, useState } from "react";
import arr from "../Arr";
import App from "./App";
import Button from "@mui/material/Button";

function Insertion() {
    var [insertionArr] = useState([...arr]);
    const [sorted,setSorted] = useState(insertionArr.length);
    const [max, setMax] = useState(0);
    const [isSorted, setIsSorted] = useState(false);
    const [delay, setDelay] = useState(1);
    function DecSorted() {
        setSorted(sorted-1);
    }
    function IncMax(val){
        setMax(val);
    }

    function Sort(){
        if(max < sorted-1){
            IncMax(max+1);
            if(insertionArr[max+1] < insertionArr[max])
                swap(max+1,max);
        } else {
            if(sorted > 2){
                DecSorted();
                IncMax(0);
            } else {
                setSorted(-1);
                setMax(-1);
                showSorted();
            }
        }
        if(isSorted)
            setDelay(1000*60*60*24);
    }
    function showSorted() {
        setIsSorted(true);
    }

    useEffect(()=> {
        const myInterval = setInterval(() => {
            Sort()
        }, delay);
        return () => clearInterval(myInterval);
    })
    function swap(x,y) {
        let temp = insertionArr[x];
        insertionArr[x] = insertionArr[y];
        insertionArr[y] = temp;
    }

    return (<React.StrictMode>
        <div className="container-ver">
            <h1>Insertion Sort</h1>
            <div className="container">
             <div className="arr container">
            {insertionArr.map((num, index) =>
            <div style={{backgroundColor: index>=sorted ? "green" : index===max ? "yellow" : "whitesmoke", height: `${(num+1)*0.13}vh`}} key={index} className="data">
                {}
            </div>
            )}
             </div>
            </div>
            {isSorted && <p>The array is Sorted!</p>}
            {/* {!isSorted && <p>Highest: {insertionArr[max]} </p> } */}
            {isSorted && <Button variant="contained" className="button" onClick={App.Return} type="button"> Back </Button> }
        </div>
        </React.StrictMode>
    )
}

export default Insertion;