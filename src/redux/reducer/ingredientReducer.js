import * as myActions from '../actions/actions'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    price: 4
}
const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case myActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: state.ingredients[action.ingredientType] + 1
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default ingredientReducer;