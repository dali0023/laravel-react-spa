import React, { Component } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
    };
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
  
    saveContact = async (e)=> {
        // prevent loading by stoping default behavior
        e.preventDefault();
        const res = await axios.post("/contact", this.state);
        this.setState({name:"", email:"", phone:""});
        if (res.data.status) {            
           this.props.navigate('/', {state:{message:"congrats!"}});
        }

    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-6 offset-md-3">
                    <h2>
                      Laravel React ToDo App
                    </h2>
                        <form onSubmit={this.saveContact}>
                            <div className="form-group">
                                <label htmlFor="exampleInputName1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={(event) => this.handleChange(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={(event) => this.handleChange(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPhone1">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={(event) => this.handleChange(event)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Add Contact
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

// useNavigate is a hook, hook must work in a functional component. to use it:
function WithNavigate(props) {
    let navigate = useNavigate();
    return <AddContact {...props} navigate={navigate} />
}

export default WithNavigate