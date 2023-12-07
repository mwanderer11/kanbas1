import * as client from "./client"
import { useParams, Link } from "react-router-dom";
function OtherAccount() {
    const {userId} = useParams();
    const viewAccount = client.findUserById(userId);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {viewAccount && (
                <div>
                    <input className="form-control"  value={viewAccount.firstName} />
                    <input className="form-control" value={viewAccount.lastName}/>
                    <input className="form-control" value={viewAccount.dob}/>
                    <input className="form-control" value={viewAccount.email} />
                    <select className="form-select">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <Link to="/Kanbas/Users" className="btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
            {!viewAccount && (
                <div>
                    uh oh
                </div>
            )}
        </div>
    );
}
export default OtherAccount;