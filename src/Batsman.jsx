import { useState } from "react"

export default function Batsman(){
    const[runs, setRuns] =useState(0);
    const[sixes, setSixes] =useState(0);
    const handleSingles=()=>{
        const updatedRuns=runs+1;
        setRuns(updatedRuns)
    }
    const handleSix=()=>{
        const updatedRuns=runs+6;
        const upadatedSixes =sixes+1;
        setSixes(upadatedSixes);
        setRuns(updatedRuns);
    }
    return(
        <div>
            <h3>player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs>50 && <p>your score: 50</p>
            }
            <h1>score:{runs} </h1>
            <button onClick={handleSingles}>singles</button>
            <button>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )

}