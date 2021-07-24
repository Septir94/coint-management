
const initialState = {
 initiateList:[],
 marketList:[],
 viewList:[]
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "get-coin-list":
      return {
        ...state,
        initiateList:action.dataList
      };
    case "get-market-list":
      return {
        ...state,
        marketList:action.marketList,
        viewList:action.dataSlice
      }
      case "update-market-list":
        return {
          ...state,
          viewList:action.dataSlice
        }
    default:
      return state;
  }
};
