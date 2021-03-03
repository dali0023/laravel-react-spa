import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";
function App() {
    return (

        <>
          <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Contact/>} />
                <Route path="/add-contact" element={<AddContact/>} />
                <Route path="/edit/:id" element={<EditContact/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
