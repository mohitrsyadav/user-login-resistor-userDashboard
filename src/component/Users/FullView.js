import React from "react";
import { useLocation,Link} from "react-router-dom";
import Header from "../Common/Header";
const FullView = (props) => {
    const {state} = useLocation();
    console.log("Single Data", state);
    return (
        <>

        <Header />
        <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col- 8 col-sm-8 shadow-sm mt-5 p-5 mb-5 bg-white rounded">

            <table class="table table-bordered">
            <thead class="thead-bg">
            <tr>
            <th colSpan={3}>
            Trainer Name : {state.fullView.name}
            </th>
            </tr>

              <tr> <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{state.fullView.email}</td>
                    <td>{state.fullView.contact}</td>
                    <td>{state.fullView.gender}</td>
                </tr>
            </tbody>
            <tfoot>
    <tr>
      <td colSpan={3}> <Link to="/users"><button className="btn btn-light mt-2"><b>Go Back</b></button></Link></td>
    </tr>
  </tfoot>
           
            </table>
            </div>
            </div>
            </div>
        </>
    )
}
export default FullView;