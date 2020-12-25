export const initialState = {
  
    nominations: [],
};

const reducer = (state,action) => {
    console.log(action)
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                nominations:[...state.nominations,action.item]
            }
        default:
            return state;
    }
}

export default reducer