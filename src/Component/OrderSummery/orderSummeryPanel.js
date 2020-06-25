import React from "react";

const orderSummeryPanel = (props)=>{
    return(
        <div>
            <div style={{
                transition:'all 1s',
                transform: props.showed ?'translateY(0)':'translateY(-200%)'
            }}>
                {props.children}
            </div>
        </div>
    )
}
export default orderSummeryPanel;