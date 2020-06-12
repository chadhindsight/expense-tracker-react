// Based on what action is performed, the reducer
// specifies how state will change
export default (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS': 
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // Filter out anything that matches the id of action.paload
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }    
        default:
            return state;
    }
}