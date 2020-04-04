
const createIncrementAction = (number) => {
    return { type: 'INC', payload: number }
}

export default createIncrementAction;