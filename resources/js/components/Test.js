// import React from 'react';
// import { useParams } from "react-router-dom";

// const Test = (props) => {
//     const { id } = useParams();
//     console.log(id);

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Test;

import React, { Component } from 'react';
import { useParams } from "react-router-dom";
class Test extends Component {
    render() {
    // console.log(this.props.params);

        return (
            <div>
                {/* <p>{this.props.params}</p> */}
            </div>
        );
    }
}

// useNavigate is a hook, hook must work in a functional component. to use it:
function WithNavigate(props) {
    // let navigate = useNavigate();
    const params = useParams();
    return <Test {...props}  params={params}/>
}

export default WithNavigate;
// export default WithNavigate
// export function withRouter( Child ) {
//   return ( props ) => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     return <Child { ...props } navigate={ navigate } location={ location } />;
//   }
// }