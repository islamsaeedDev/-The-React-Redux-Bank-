
import { combineReducers, createStore } from "redux";



const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: ""
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            }
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload
            }
        default:
            return state
    }

}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})
const store = createStore(rootReducer);



store.dispatch(requestLoan(1000, "buy a car"))
console.log(store.getState())

store.dispatch(payLoan())
console.log(store.getState())

function createCustomer(fullName, nationalID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString()
        }
    }
}

function updateName(fullName) {
    return {
        type: "customer/updateName",
        payload: fullName
    }
}

store.dispatch(createCustomer('islam', '12345678'));

console.log(store.getState());

store.dispatch(updateName('shismaa'))
console.log(store.getState());