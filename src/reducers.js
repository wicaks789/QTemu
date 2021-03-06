const myStore = {
    title:"test redux",
    info:'Info redux',
    people:[],
    angka:0
};

const myReducer = (state = {...myStore}, action) => {
    switch(action.type) {
        case('INCREMENT'):
            return({
                ...state,
                angka:state.angka+=1
            })
        case('DECREMENT'):
            return({
                ...state,
                angka:state.angka-=action.payload
            })
        case('RESET'):
           return({
            ...state,
            angka:0,
            people:[]
           })
        case('FETCHUSER'):
        return({
           ...state,
           people:action.payload
        })
        case('ADDUSER'):
        return({
           ...state,
           people:action.payload
        })
        default:
            return state
    }

}

export default myReducer;