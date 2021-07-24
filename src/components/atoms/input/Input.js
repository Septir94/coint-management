import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMarketData } from '../../../actions/CointsAction';
import "./input.css"

export default function Input() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.coinState)
    const [input,setInput]=useState({
        name:"",
        ticker:""
    })
    const onChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input);
    }
    const onSubmit=()=>{
        dispatch(addMarketData(input,state.viewList,state.marketList));
    }
    return (
        <div className="input-container">
            <input type="text" placeholder="please input name "name="name" onChange={onChange} value={input.name}></input>
            <input type="text" placeholder="please input ticker " name="ticker" onChange={onChange} value={input.ticker}></input>
            <button style={{color:"white",backgroundColor:"GrayText",height:"25px",borderRadius:"5px"}}
            onClick={onSubmit}>add cryptocurrencies</button>
        </div>
    )
}
