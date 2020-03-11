import React from 'react'
import "./css/AddedShoplist.css"

function AddedShopList ({togglerPopUp}) {
    return(
        <div className="body-addingshopList">
            <div>
            <h1> We  added the produts to your shopping list</h1>
            <button onClick={togglerPopUp}>Close</button>
            </div>

           
        </div>
    )
}

export default AddedShopList