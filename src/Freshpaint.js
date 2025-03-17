import {Helmet} from "react-helmet";
import React from 'react';
import useFreshpaintCDN from './useFreshpaintCDN'

function Freshpaint (){
    
    return (
        
        
        <div id='freshpaint'>
        {freshpaintInit(ENV_ID)}
        {useFreshpaintCDN(ENV_ID)}
        <button>FP</button>
    </div>
    )
}
    
export default Freshpaint