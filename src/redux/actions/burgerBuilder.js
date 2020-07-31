import * as actions from './actionTypes'

export const addIngredient = (ingre)=>{
    return{
        type:actions.ADD_INGREDIENT,
        ingredientType:ingre
    }
}
export const removeIngredient =(ingre)=>{
    return{
        type:actions.REMOVE_INGREDIENT,
        ingredientType:ingre
    }
}