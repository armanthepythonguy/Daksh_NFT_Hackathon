import React from "react";


function Item(id){
    console.log(`i got clicked ${id}`);
    return <div>
        {id}
    </div>
}

export default Item;