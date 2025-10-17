
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

function deposit(amount) {
    return { type: "account/deposit", payload: amount }
}
store.dispatch(deposit(500))
console.log(store.getState())


function withdraw(amount) {
    return { type: "account/withdraw", payload: amount }
}
store.dispatch(withdraw(200))
console.log(store.getState())

function requestLoan(amount, purpose) {
    return {
        type: "account/requestLoan",
        payload: {
            amount: amount,
            purpose: purpose
        }
    }
}
store.dispatch(requestLoan(1000, "buy a car"))
console.log(store.getState())
function payLoan() {
    return { type: "account/payLoan" }
}
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