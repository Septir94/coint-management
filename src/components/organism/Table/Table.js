import React from "react";
import { useSelector } from "react-redux";
import Input from "../../atoms/input/Input";
import "./table.css";

export default function Table() {
  const state = useSelector((state) => state.coinState);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  const tableData = state.viewList.sort(compare).map((coinlist) => {
    return (
      <tr style={{ fontSize: "0.8em", textAlign: "left" }}>
        <td data-label="Name">{coinlist.name}</td>
        <td data-label="Price">$ {numberWithCommas(coinlist.current_price)}</td>
        <td data-label="24h"
          style={{
            color: coinlist.price_change_percentage_24h < 0 ? "red" : "green",
          }}
        >
          {coinlist.price_change_percentage_24h.toFixed(2)}
        </td>
        <td data-label="7d"
          style={{
            color: coinlist.price_change_percentage_24h < 0 ? "red" : "green",
          }}
        >
          {coinlist.price_change_percentage_7d_in_currency.toFixed(2)}
        </td>
        <td data-label="Market Cap">$ {numberWithCommas(coinlist.market_cap)}</td>
        <td data-label="Volume 24h">$ {numberWithCommas(coinlist.total_volume)}</td>
        <td data-label="circulating supply">$ {numberWithCommas(coinlist.circulating_supply)}</td>
        <td data-labek="Last 7 days"></td>
      </tr>
    );
  });
  return (
    <div className=".container-fluid">
      <Input />
      <table className="table" cellSpacing="2px">
        <thead class="thead-dark">
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>7d</th>
            <th>Market cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Last 7 Days</th>
        </thead>
        <tbody>
        {state.marketList.size == 0 ? <div>loading...</div> : tableData}
        </tbody>
      </table>
    </div>
  );
}
