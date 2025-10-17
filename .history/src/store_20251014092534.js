
import { createStore } from "redux";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: ""
}

function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "account/deposit":

            return { ...state, balance: state.balance + action.payload }
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload
            }
        case "account/requestLoan":
            if (state.loan > 0) return state;
            //later
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            }
        case "account/payLoan":

            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan
            }

        default:
            return state

    }
}
const store = createStore(accountReducer);

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
        type: "account/updateName",
        payload: fullName
    }
}
