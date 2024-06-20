import React, { useEffect,useState } from "react";
import arr from "../Arr";
import App from "./App";
import Button from "@mui/material/Button";

function MergeSort() {
    var [merArr, setMerArr] = useState([...arr]);
    const [[left,right], setLeftRight] = useState([-1,-1]);
    const [showSorted, setShowSorted] = useState(false);
    const [sorted, setSorted] = useState(-1);
    var isSorted = false;
    const [callDelay, setCallDelay] = useState(5);
    var delay = 5;

    function updateMerArr() {
        setMerArr([...merArr]);
    }
    function changeLeftRight(start, end) {
        setLeftRight([start, end]);
    }
    function changeSorted(val){
        setSorted(val);
    }

    function timeout() {
        return new Promise( res => setTimeout(res, delay) );
    }

    async function Sort(start,end) {
        await changeSorted(-1);
        if(start >= end)
            return;
        var mid = Math.floor((start+end)/2);
        await Sort(start,mid);
        await Sort(mid+1,end);
        await Merge(start, end, mid);
        return true;
    }

    async function Merge(start, end, mid) {
        await timeout();
        await changeLeftRight(start,end);
        var i = start;
        var j = mid+1;
        var temp = [];
        while(i<=mid && j<=end){
            if(merArr[i] <= merArr[j]){
                temp.push(merArr[i]);
                i++;
            } else {
                temp.push(merArr[j]);
                j++;
            }
        }
        while(i<=mid){
            temp.push(merArr[i]);
            i++;
        }
        while(j<=end){
            temp.push(merArr[j]);
            j++;
        }
        for(let x=0; x<temp.length; x++){
            merArr[start+x] = temp[x];
            await updateMerArr();
            await changeSorted(start+x);
            await timeout();
        }
        await updateMerArr();
    }

    async function startSorting() {
        setCallDelay(1000*60*60*24);
        isSorted = await Sort(0, merArr.length-1);
        updateMerArr();
        setShowSorted(true);
    }

    useEffect(()=> {
        const myInterval = setInterval(() => {
            startSorting();
        }, callDelay);
        return () => clearInterval(myInterval);
    })

    return (<React.StrictMode>
        <div className="container-ver">
            <h1>Merge Sort</h1>
            <div className="container">
             <div className="arr container">
            {merArr.map((num, index) => 
                <div style={{
                    backgroundColor: index>=left && index<=sorted ? "green" : index>=left && index <=right ? "yellow" : "whitesmoke" ,
                    height: `${(num+1)*0.13}vh`
                    }} key={index} className="data">
                    {}
                </div>
            )}
             </div>
            </div>
            {showSorted && <p>The array is Sorted!</p>}
            {showSorted && <Button variant="contained" className="button" onClick={App.Return} type="button"> Back </Button> }
                
        </div>
        </React.StrictMode>
    )
}

export default MergeSort;