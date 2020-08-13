import React, {Component} from 'react'
import * as ReactBootStrap from "react-bootstrap";

class Employee extends Component{
render(){
    return(
    <div>
        <ReactBootStrap.Table striped bordered hover>
            <tr>
            <th>Name</th>
            <th>Job</th>
            </tr>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring Actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </ReactBootStrap.Table>
    </div>
    )
}
}

export default Employee