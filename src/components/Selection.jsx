import React, { useEffect, useState } from "react";
import arr from "../Arr";
import App from "./App";
import Button from "@mui/material/Button";


function Selection() {
    var [selectionArr] = useState([...arr]);
    const [sorted, setSorted] = useState(0);
    const [least, setLeast] = useState(0);
    const [i,setI] = useState(0);
    const [isSorted, setIsSorted] = useState(false);
    const [delay, setDelay] = useState(1);
    function incSorted() {
        setSorted(sorted+1);
    }
    function changeLeast(val) {
        setLeast(val);
    }
    function incI(val) {
        setI(val);
    }
    function showSorted() {
        setIsSorted(true);
    }

    function Sort() {
        if(i<selectionArr.length-1){

            incI(i+1);
            if(selectionArr[i+1]<selectionArr[least])       //Since Rendering takes snapshot in time, dunring this render i will not be increased. It increases after exiting this func i.e Next.
                changeLeast(i+1);
        }
        else{
            if(least > sorted){
                swap(least, sorted);
            } else {
                null;
            }
            if(sorted < selectionArr.length-1)
                {
                    incSorted();
                    changeLeast(sorted+1);
                    incI(sorted+1);
                } else {
                    setSorted(selectionArr.length);
                    setLeast(-1);
                    setI(-1);
                    showSorted();
                }
        }
        console.log(selectionArr);
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
        let temp = selectionArr[x];
        selectionArr[x] = selectionArr[y];
        selectionArr[y] = temp;
    }

    return (<React.StrictMode>
        <div className="container-ver">
            <h1>Selection Sort</h1>
            <div className="container">
             <div className="arr container">
            {selectionArr.map((num, index) =>
            <div style={{backgroundColor: index<=sorted ? "green" : index===i ? "yellow" : "whitesmoke", height: `${(num+1)*0.13}vh`}} key={index} className="data">
                {}
            </div>
            )}
             </div>
            </div>
            {isSorted && <p>The array is Sorted!</p>}
            {/* {!isSorted && <p>Least: {selectionArr[least]} </p> } */}
            {isSorted && <Button variant="contained" className="button" onClick={App.Return} type="button">Back</Button> }
        </div>
        </React.StrictMode>
    )
}


export default Selection;