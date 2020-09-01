
import React from 'react'
import"./PlotterBox.css";
import { Avatar, Button} from"@material-ui/core";

const PlottBox= () => {
    return (
        <div className='plottBox'> 
        <form>
<div className='plottBox__input'>
<Avatar />
<input placeholder= "How are u ?" type="text"/>



</div>
<input className="plottBox__imageInput" placeholder= "Enter image URL" type="text"/>
<button className='plottBox__plottButton'>
    Send
</button>
           </form> 
        </div>
    )  
}

export default PlottBox
 