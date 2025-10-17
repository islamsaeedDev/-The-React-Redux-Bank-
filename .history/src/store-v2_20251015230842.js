import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";




const srore = configureStore(rootReducer);

export default store;