import React from "react";
import BurgerController from "./BurgerController/burgerController";

const controls = [
    {label: 'salad'},
    {label: 'cheese'},
    {label: 'meat'},
    {label: 'bacon'}
]
const BurgerControls = () => {
    return (
        <div>
            {controls.map((index) =>
                <BurgerController
                    label={index.label}
                    key={index.label}
                />
            )}
        </div>
    )
}


export default BurgerControls