import React from 'react';

function clicky(){
    window.freshpaint?.track('Clicky clicky...')
}

const FreshpaintButton = () => {
    return (
        <button onClick={clicky}>Freshpaint Button - Clicky Clicky</button>
    )
}

export default FreshpaintButton