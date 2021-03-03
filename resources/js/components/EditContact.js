import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useNavigate, useParams,Link } from "react-router-dom";

class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
    };
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
  
    updateContact = async (e)=> {
        // prevent loading by stoping default behavior
        e.preventDefault();
        const id = this.props.params.id;
        const res = await axios.patch(`/contact/${id}`, this.state)
            .then((result) => {
                this.props.navigate("/");
            });

    }
     async componentDidMount () {
        const id = this.props.params.id;
        const res = await axios.get(`/contact/${id}/edit`).then((result) => {
            this.setState({
                name: result.data.contacts.name,
                email: result.data.contacts.email,
                phone: result.data.contacts.phone
            });
        });
    }

    
    render() {

        return (
            <>
                <div className="row">
                    <div className="col-6 offset-md-3">
                    <h2>
                      Laravel React ToDo App
                    </h2>
                        <form onSubmit={this.updateContact}>
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
                                Update Contact
                            </button>
                            <Link to="/" className="btn btn-success">
                                Back
                            </Link>
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
    const params = useParams();
    return <EditContact {...props} navigate={navigate} params={params}/>
}

export default WithNavigate