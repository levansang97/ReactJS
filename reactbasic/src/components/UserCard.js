import React, { Component } from "react";
import UserInfo from "./UserInfo";
// import User from "../models/User";

class UserCard extends Component {
    constructor(props) {
        super(props);
        // State for users
        this.state = {
            users: []
        };
    }

    render() {
        const { users } = this.state; // lấy users từ state

        return (
            <div className="border p-4 rounded-lg shadow-md bg-white">
                <h3 className="text-lg font-bold mb-2">Thông tin người dùng</h3>

                {/* Nested component */}
                <UserInfo user={this.props.user} />

                <div>
                    <h2>User List</h2>
                    <ul>
                        {users
                            .filter((u) => u.role === "admin")  // chỉ lấy admin
                            .map((u) => (
                                <li key={u.id}>
                                    {u.id === 1 && <UserInfo user={u} />}
                                </li>
                            ))}
                    </ul>
                </div>

            </div>
        );
    }
}

export default UserCard;
