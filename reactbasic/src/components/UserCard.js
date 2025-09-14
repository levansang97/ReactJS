import React, { Component } from "react";
import UserInfo from "./UserInfo";

class UserCard extends Component {
    constructor(props) {
        super(props);
        // State for users
        this.state = {
            users: [
                { id: 1, name: 'Alice', email: 'alice@example.com' },
                { id: 2, name: 'Bob', email: 'bob@example.com' },
                { id: 3, name: 'Charlie', email: 'charlie@example.com' },
            ],
        };
    }

    render() {
        const { user } = this.props; // lấy user từ props
        const { users } = this.state; // lấy users từ state

        return (
            <div className="border p-4 rounded-lg shadow-md bg-white">
                <h3 className="text-lg font-bold mb-2">Thông tin người dùng</h3>

                {/* Nested component */}
                <UserInfo username={user.username} email={user.email} />

                <div>
                    <h2>User List</h2>
                    <ul>
                        {users.map((u) => (
                            <li key={u.id}>
                                <UserInfo username={u.name} email={u.email} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserCard;
