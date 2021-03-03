import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChildContact from "../components/ChildContact"
class Contact extends Component {
    state ={
        contacts:[]
    }
    getAllContact = async()=>{
    const res = await axios.get("/contact")
                    .then((result) => {
                        this.setState({contacts: result.data.contacts});
                    });
    }

     componentDidMount = ()=>{
        this.getAllContact();
    }
    deleteContact= async(id)=>{
        const res = await axios.delete(`/contact/${id}`).then((result) => {
            this.getAllContact();
        });
    }
    render() {        
        return (
            <>
                <br/>
                
                <ChildContact 
                    deleteContact={this.deleteContact} 
                    contact={this.state.contacts}
                />
            </>
        );
    }
}
export default Contact;
