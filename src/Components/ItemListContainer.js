import React from "react";

const ItemListContainer = (props) => {
    const {titulo, ejemplo}=props
    return (
        <div>
            <p>{titulo}</p>
            <p>{ejemplo}</p>
        </div>
    )
}

export default ItemListContainer;