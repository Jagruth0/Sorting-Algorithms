import React,{useEffect, useState} from "react";
import arr from "../Arr";
import App from "./App";
import Button from "@mui/material/Button";

function Bubble() {
    var [bubbleArr] = useState([...arr]);
    const [sorted, setSorted] = useState(bubbleArr.length);
    const [[i,j],setNums] = useState([-1,0]);
    const[isSorted, setIsSorted] = useState(false);
    const [delay, setDelay] = useState(1);
    function DecSorted() {
        setSorted(sorted-1);
    }
    function IncNums([x,y]) {
        setNums([x,y]);
    }
    function ShowSorted() {
        setIsSorted(true);
    }
    function Sort() {
        if(j<sorted-1) {
            IncNums([i+1,j+1]);
            if(bubbleArr[i+1]>bubbleArr[j+1])
                swap(i+1,j+1);
        } else {
            if(sorted > 2){
                DecSorted();
                IncNums([-1,0]);
            } else {
                setSorted(-1);
                IncNums([-1,-1]);
                ShowSorted();
            }
        }
        if(isSorted)
            setDelay(1000*60*60*24);
    }
    useEffect(()=> {
        const myInterval = setInterval(() => {
            Sort()
        }, delay);
        return () => clearInterval(myInterval);
    })


    function swap(x,y) {
        let temp = bubbleArr[x];
        bubbleArr[x] = bubbleArr[y];
        bubbleArr[y] = temp;
    }
    return (<React.StrictMode>
        <div className="container-ver">
            <h1>Bubble Sort</h1>
            <div className="container">
             <div className="arr container">
            {bubbleArr.map((num, index) =>
            <div style={{backgroundColor: index>=sorted ? "green" : index===i || index===j ? "yellow" : "whitesmoke", height: `${(num+1)*0.13}vh`}} key={index} className="data">
                {}
            </div>
            )}
             </div>
            </div>
            {isSorted && <p>The array is Sorted!</p>}
            {isSorted && <Button variant="contained" className="button" onClick={App.Return} type="button"> Back </Button> }
        </div>
        </React.StrictMode>
    )
}

export default Bubble;