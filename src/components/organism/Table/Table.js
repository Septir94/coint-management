import React from 'react'
import { useSelector } from 'react-redux'
import Input from '../../atoms/input/Input'
import './table.css'

export default function Table() {
    const state = useSelector(state => state.coinState)
    const numberWithCommas=(x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const tableData=state.viewList.slice(0,10).map((coinlist=>{
       return (
           <tr style={{fontSize:"0.8em",textAlign:"left"}}>
           <td>{coinlist.name}</td>
           <td>$ {numberWithCommas(coinlist.current_price)}</td>
           <td style={{color:coinlist.price_change_percentage_24h<0?"red":"green"}}>{coinlist.price_change_percentage_24h.toFixed(2)}</td>
           <td style={{color:coinlist.price_change_percentage_24h<0?"red":"green"}}>{coinlist.price_change_percentage_7d_in_currency.toFixed(2)}</td>
           <td>$ {numberWithCommas(coinlist.market_cap)}</td>
           <td>$ {numberWithCommas(coinlist.total_volume)}</td>
           <td>$ {numberWithCommas(coinlist.circulating_supply)}</td>
           <td></td>
           </tr>
       )
    }))
    return (
        <div>
             <Input/>
            <table cellSpacing="2px">
                <th>
                    <td>
                    Name
                    </td>
                </th>
                <th>
                    <td>
                    Price
                    </td>
                </th>
                <th>
                    <td>
                    24h
                    </td>
                </th>
                <th>
                    <td>
                    7d
                    </td>
                </th>
                <th>
                    <td>
                    Market cap
                    </td>
                </th>
                <th>
                    <td>
                Volume(24h)
                </td>
                </th>
                <th>
                    <td>
                Circulating Supply
                </td>
                </th>
                <th>
                    <td>
                Last 7 Days
                </td>
                </th>
                    {state.marketList.size==0?<div>loading...</div>:tableData}
                
            </table>
           
        </div>
    )
}
