const increment = (arg) => {
    return {
        type: 'INCREMENT',
        payload: arg
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT',
        payload: 1
    }
}
export { increment, decrement };