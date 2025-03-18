import React from 'react';

function clicky(){
    window.freshpaint?.track('clicky clicky')
}

const FreshpaintForm = (props) => {

    function formOnSubmit(event){
        

        event.preventDefault(); // Prevents page reload
        const name = document.getElementById("form-name").value;
        const email = document.getElementById("form-email").value;
        const address = document.getElementById("form-address").value;
        window.freshpaint?.track('Formy submittty.', {
            'name': name, 
            'email': email, 
            'address': address
        })
        document.getElementById("freshpaintForm").reset();

    }

    return (
        <form id="freshpaintForm" onSubmit={formOnSubmit}>
        
        <label for="name">Name:</label>
        <input type="name" id="form-name" name="name" required />
        
        <label for="email">Email:</label>
        <input type="email" id="form-email" name="email" required />
        
        <label for="address">Address:</label>
        <input type="text" id="form-address" name="address" required />

        <button type="submit">Submit</button>
        </form>
    )

    
    
};

export default FreshpaintForm;
