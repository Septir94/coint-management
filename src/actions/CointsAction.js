import { globalApis } from "../configs/apis";
import { loadState } from "../util/localStorage";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

export const initiateCointList = () => (dispatch) => {
	globalApis.get("/coins/list").then((data)=>{

			globalApis.get("/coins/markets",{params:{
				vs_currency:"usd",price_change_percentage:"7d",sparkline:true
			}},{}).then((data)=>{
				dispatch({
					type:"get-market-list",
					marketList:data.data,
					dataSlice:[]
				})
				
			})
		
		
		dispatch({
			type:"get-coin-list",
			dataList:data.data,
		})
	})
};

export const getMarketData=(id)=>(dispatch)=>{

	globalApis.get("/coins/markets",{params:{
		vs_currency:"usd",
		ids:id
	}},{}).then((data)=>{
		console.log(data.data);
	})

}

export const addMarketData=(input,viewList,initiateList)=>(dispatch)=>{
		if(input.name!=""||input.ticker!==""){
			console.log(initiateList);
			const newList=[];
			const newViewList=[];
			initiateList.map((list)=>{if(list.name.toLowerCase()==input.name.toLowerCase()||list.symbol.toLowerCase()==input.name.toLowerCase()){
				newList.push(list)
			}});
			globalApis.get("/coins/markets",{params:{
				vs_currency:"usd",
				ids:newList.length<=0?"":newList[0].id,
				price_change_percentage:"7d",sparkline:true
			}},{}).then((data)=>{
				newList.map((newList)=>{
					newViewList.push(newList)
				})
				viewList.map((list)=>{
					if(list.name.toLowerCase()!=input.name.toLowerCase()){
						newViewList.push(list)
					}
				})
				
				dispatch({
					type:"update-market-list",
					dataSlice:newViewList
				})
			})
		}
}

export const deleteMarketData=(id,initiateList)=>(dispatch)=>{
	const newIntiateList=initiateList.filter((coinlist)=>coinlist.id!=id);
	dispatch({
		type:"get-coin-list",
		dataList:newIntiateList
	})
}