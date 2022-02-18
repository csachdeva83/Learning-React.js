import React,{useState} from "react";
import Square from "./Square";
import Button from './bingoButton';
import "./Board.css";

function Board(){

    const [square,setSquare]=useState(Array(29).fill(null));
    const [X,setX]=useState(true);
    const [read,setRead]=useState(false);

    let count=0;

    const winner=calculateWinner(square);
    
    let status;
    if(winner){
        status='Bingo: '+ winner;
    }else{
        status='Player turn: '+ (X?'X':'O');
    }

    const handleClick=(i)=>{
        if(read){
            const squares=square.slice();
        
            if(squares[i]===null){
                // squares[i]=X?'X':'O';
                squares[i]='X';
                console.log(squares[i]);
                setSquare(squares);
                setX(!X);
            }else{
                alert("Can't do that");
            }
        }else{
            return false;
        }
    };

    function calculateWinner(squares){
        const lines=[
            [0,1,2,3,4],
            [5,6,7,8,9],
            [10,11,12,13,14],
            [15,16,17,18,19],
            [20,21,22,23,24],
            [0,5,10,15,20],
            [1,6,11,16,21],
            [2,7,12,17,22],
            [3,8,13,18,23],
            [4,9,14,19,24],
            [0,6,12,18,24],
            [4,8,12,16,20]
        ];
        
        for(let i=0;i<lines.length;i++){
            const [a,b,c,d,e]=lines[i];
            if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c] && squares[a]===squares[d] && squares[a]===squares[e]){
                count++;
            }
            if(count===5){
                return squares[a];
            }
        }

        return null;
    }
    
    const renderSquare= (i)=>{
        return(
            <Square style={square[i]==='X'?{backgroundColor: "#FFC300",color:"#861111",fontWeight: "bold"}:null} value={square[i]} onClick={()=> handleClick(i)} read={read}/>
        );
    };

    return(
        <div className="board">
            <div className="board-row">
                <Button style={count>=1?{backgroundColor: "black"}:null} letter="B" />
                <Button style={count>=2?{backgroundColor: "black"}:null} letter="I" />
                <Button style={count>=3?{backgroundColor: "black"}:null} letter="N" />
                <Button style={count>=4?{backgroundColor: "black"}:null} letter="G" />
                <Button style={count>=5?{backgroundColor: "black"}:null} letter="O" />
            </div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
            </div>
            <div className="board-row">
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                {renderSquare(9)}
            </div>
            <div className="board-row">
                {renderSquare(10)}
                {renderSquare(11)}
                {renderSquare(12)}
                {renderSquare(13)}
                {renderSquare(14)}
            </div>
            <div className="board-row">
                {renderSquare(15)}
                {renderSquare(16)}
                {renderSquare(17)}
                {renderSquare(18)}
                {renderSquare(19)}
            </div>
            <div className="board-row">
                {renderSquare(20)}
                {renderSquare(21)}
                {renderSquare(22)}
                {renderSquare(23)}
                {renderSquare(24)}
            </div>
            <button onClick={()=>setRead(true)}>Ready!</button>
            {status}
        </div>
    );
}

export default Board;

