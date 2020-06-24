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
const priceIngredient={
    salad: 0.7,
    bacon: 1.5,
    meat: 2,
    cheese: 1.3
}
const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case myActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientType]: state.ingredients[action.ingredientType] + 1
                },
                price: state.price + priceIngredient[action.ingredientType]
            }
        case myActions.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientType]:state.ingredients[action.ingredientType] - 1
                },
                price: state.price - priceIngredient[action.ingredientType]
            }
        default:
            return {
                ...state
            }
    }
}

export default ingredientReducer;