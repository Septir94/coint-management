import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { initiateCointList } from "../../actions/CointsAction";
import Header from "../../components/atoms/Header/header";
import Table from "../../components/organism/Table/Table";


 function HomePage() {
	const dispatch = useDispatch();
	useEffect(() => {
	 dispatch(initiateCointList());
	}, [])
	return (
		<div className=".container-fluid">
			<Header/>
			<h3 style={{color:"GrayText",fontSize:"1em"}}>
			Today's Cryptocurrency Prices by Song Company
			</h3>
			<Table/>
		</div>
	)
}

export default HomePage;
