import React, {useState} from "react";
import UnsortedArr from "./UnsortedArr";
import Selection from "./Selection";
import Bubble from "./Bubble";
import Insertion from "./Insertion";
import MergeSort from "./MergeSort";
import Button from "@mui/material/Button";



function App() {
    const [showButton, setShowButton] = useState(true);
    const [showSelect, setShowSelect] = useState(false);
    const [showBubble, setShowBubble] = useState(false);
    const [showInsert, setShowInsert] = useState(false);
    const [showMerge, setShowMerge] = useState(false);

    function SelectCall () {
        setShowButton(false);
        setShowSelect(true);
    }
    function BubbleCall () {
        setShowButton(false);
        setShowBubble(true);
    }
    function InsertCall () {
        setShowButton(false);
        setShowInsert(true);
    }
    function MergeCall () {
        setShowButton(false);
        setShowMerge(true);
    }
    function Return() {
        console.log(1);
        setShowButton(true);
        setShowSelect(false);
        setShowBubble(false);
        setShowInsert(false);
        setShowMerge(false);
    }
    App.Return = Return;

    return (
        <div>
            {showButton && <UnsortedArr />}
            <div className="algorithms">
                {showButton && <Button variant="contained" className="button" onClick={SelectCall} > Selction Sort </Button>}
                {showButton && <Button variant="contained" className="button" onClick={BubbleCall} > Bubble Sort </Button>}
                {showButton && <Button variant="contained" className="button" onClick={InsertCall} > Insertion Sort </Button>}
                {showButton && <Button variant="contained" className="button" onClick={MergeCall} > Merge Sort </Button>}
            </div>
            {showSelect && <Selection />}
            {showBubble && <Bubble/>}
            {showInsert && <Insertion />}
            {showMerge && <MergeSort />}
        </div>
    );
}

export default App;