import React, { useState } from "react";
import UserCard from "./UserCard";

// LoginForm component
// Case 1: 
// export default function LoginForm() {
//     const [formData, setFormData] = useState({
//         username: "",
//         password: ""
//     });
//     const [error, setError] = useState("");
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isLogin, setisLogin] = useState(false);
//     const [user, setUser] = useState({
//         username: "",
//         email: ""
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");

//         if (!formData.username || !formData.password) {
//             setError("Username and password are required!");
//             return;
//         }

//         setIsSubmitting(true);
//         try {
//             // Mock API call
//             await new Promise((resolve) => setTimeout(resolve, 1000));

//             if (formData.username === "admin" && formData.password === "123456") {
//                 alert("Login successful ✅");
//                 setisLogin(true);
//                 setUser({ ...formData, email: "abc@gmail.com.vn" });
//             } else {
//                 setError("Invalid username or password ❌");
//             }
//         } catch (err) {
//             setError("Something went wrong. Try again!");
//         } finally {
//             setIsSubmitting(false);
//         }
//     };
//     if (isLogin) {
//         return <UserCard user={user} />;
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-8 rounded-2xl shadow-md w-80"
//             >
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

//                 {error && (
//                     <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
//                 )}

//                 <div className="mb-4">
//                     <label className="block text-sm mb-1">Username</label>
//                     <input
//                         type="text"
//                         name="username"
//                         className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//                         value={formData.username}
//                         onChange={handleChange}
//                         disabled={isSubmitting}
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label className="block text-sm mb-1">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//                         value={formData.password}
//                         onChange={handleChange}
//                         disabled={isSubmitting}
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
//                     disabled={isSubmitting}
//                 >
//                     {isSubmitting ? "Logging in..." : "Login"}
//                 </button>
//             </form>
//         </div>
//     );
// }
// Case 2:
const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLogin, setisLogin] = useState(false);
    const [user, setUser] = useState({
        username: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.username || !formData.password) {
            setError("Username and password are required!");
            return;
        }

        setIsSubmitting(true);
        try {
            // Mock API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            if (formData.username === "admin" && formData.password === "123456") {
                alert("Login successful ✅");
                setisLogin(true);
                setUser({ ...formData, email: "abc@gmail.com.vn" });
            } else {
                setError("Invalid username or password ❌");
            }
        } catch (err) {
            setError("Something went wrong. Try again!");
        } finally {
            setIsSubmitting(false);
        }
    };
    if (isLogin) {
        return <UserCard user={user} />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-md w-80"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {error && (
                    <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
                )}

                <div className="mb-4">
                    <label className="block text-sm mb-1">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        value={formData.username}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}
export default LoginForm;
