import React, { useEffect, useState } from 'react';
import DeleteUser from './DeleteUser.js';
import UpdateUser from './UpdateUser.js';
import { Button} from 'reactstrap';

const UserList  = () => {
const [list, setList]= useState([])
 useEffect(() => {
  
            fetch(
              "http://localhost:4000/users",
              {
                "headers":{
                  "accept": "application/json",
                  "content-type":"application/json"
                },
                "method":"GET" 
              },
            ).then((response) => response.json())
            .then((response) => setList(response))
             }, [])


  return(
    <div class="container">
        <div class="row">
            <div class="col-sm-1"></div>         
            <div class="col-sm-10">
                <center><h1>Listing Users</h1></center>
                {console.log(list)}
                <table class="table table-hover" >
                    <thead class="black white-text">
                        <tr>
                            <th>User id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact No</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {list.map((l,i) => {
                            return (
                                <tr key={i}>
                                    <td>{l.id}</td>
                                    <td>{l.name}</td>
                                    <td>{l.email}</td>
                                    <td>{l.contact_no}</td>
                                    <td><Button color="primary" onClick={() => UpdateUser(l.id)} >Update</Button></td>
                                    <td><Button color="danger" onClick={() => DeleteUser(l.id)} >Delete</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> 
            <div class="col-sm-1"></div>
        </div>
        </div>
    )
}


export default UserList;