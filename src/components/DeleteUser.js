import React, { useState, useEffect } from 'react';

const DeleteUser = recordId => {
    fetch("http://localhost:4000/users/"+recordId,
              {
                "headers":{
                  "accept": "application/json",
                  "content-type":"application/json"
                },
                "method":"DELETE" 
              },
        ).then(response => {
            console.log(response);  
            });  
}

export default DeleteUser;