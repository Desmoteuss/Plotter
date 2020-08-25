
import React from 'react'
import"./PlotterBox.css";
import { Avatar, Button} from"@material-ui/core";

const PlottBox= () => {
    return (
        <div className='plottBox'> 
        <form>
<div className='plottBox__input'>
<Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
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
 