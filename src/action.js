export const increment = () => ({
    type:'INCREMENT'
})

export const decrement =(payload)=>({
    type:'DECREMENT',
    payload
})

export const reset = () => ({
    type:'RESET'
})