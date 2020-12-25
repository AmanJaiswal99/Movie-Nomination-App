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
        case 'REMOVE':
           const index = state.nominations.findIndex(
               (item)=>item.id === action.id
           )
        console.log(action.id)
           let newNominations =[...state.nominations]
           if(index >=0){
               newNominations.splice(index,1)
           } else {
               console.warn(
                   'movie is not in the nomination list'
               )
           }
           return{
               ...state,
               nominations: newNominations
           }
        default:
            return state;
    }
}

export default reducer