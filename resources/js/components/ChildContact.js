import React, { Component } from 'react';
import {Link}  from "react-router-dom";

class ChildContact extends Component {
    render() {
        return (
            <div className="col-8 offset-md-2">
            <h1>All Contacts</h1>
                <hr/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                   <tbody>                
                    {this.props.contact.map((con, i)=>{
                    return (<tr key={i}>
                            <th scope="row" >{i+1}</th>
                            <td>{con.name}</td>
                            <td>{con.email}</td>
                            <td>{con.phone}</td>
                            <td>
                            <Link to={`/edit/${con.id}`} className="btn btn-sm btn-primary mb-2 mr-2">Edit</Link>  
                            <a onClick={()=>this.props.deleteContact(con.id)} 
                               className="btn btn-sm btn-danger mb-2 mr-2"> Delete
                            </a>
                            </td>
                        </tr>)
                    })}               
                </tbody>
            </table>
            </div>
        );
    }
}

export default ChildContact;