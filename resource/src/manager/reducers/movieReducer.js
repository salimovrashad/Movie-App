const initalState = [];


export const movieReducer = (state=initalState,action)=>{
    switch (action.type) {
        case 'ADD_MOVIE':
            return [...state,action.movie];
    

        case "EDIT_MOVIE":
            return state.map(i=>{
                if (i.id === action.id) {
                    return {
                        ...i,...action.update
                    }
                }else{
                    return i;
                }
            })


        case "REMOVE_MOVIE":
            return state.filter(item => item.id !== action.myid)
        
        
        case "GET_MOVIES":
            return action.movies

            
        default:
            return state;
        }
}