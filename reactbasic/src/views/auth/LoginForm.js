import React, { Component } from "react";
import UserCard from "../../components/UserCard";
import "../../styles/login.scss";
import { toast, ToastContainer } from "react-toastify";
import User from "../../models/User";
import { Link } from "react-router-dom";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: "",
                password: ""
            },
            isSubmitting: false,
            isLogin: false,
            user: new User()
        };
    }

    handleChange = (e) => {
        const { formData } = this.state;
        this.setState({
            formData: {
                ...formData,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { formData } = this.state;

        if (!formData.email || !formData.password) {
            this.writeLog(1, "Email and password are required");
            return;
        }

        this.setState({ isSubmitting: true });

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                this.writeLog(1, "Invalid email or password");
            }

            const data = await res.json();
            this.setState({
                isLogin: true,
                user: data.user
            });
            this.writeLog(0, "Login successful");

            localStorage.setItem("token", data.token);
        } catch (err) {
            this.writeLog(2, "Something went wrong. Try again");
        } finally {
            this.setState({ isSubmitting: false });
        }
    };


    writeLog = (id, message) => {
        switch (id) {
            case 0:
                toast.success(message, {
                    position: "top-right",
                    autoClose: 3000,
                });
                break;
            case 1:
                toast.error(message, {
                    position: "top-right",
                    autoClose: 3000,
                });
                break;
            case 2:
                toast.warn(message, {
                    position: "top-right",
                    autoClose: 3000,
                });
                break;
            default:
                break;
        }
    };

    render() {
        const { formData, isSubmitting, isLogin, user, } = this.state;

        if (isLogin) {
            return <UserCard user={user} />;
        }
        return (
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={this.handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        value={formData.email}
                                        onChange={this.handleChange}
                                        disabled={isSubmitting}
                                    />
                                    <label className="form-label" htmlFor="email">
                                        Email address
                                    </label>
                                </div>

                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={this.handleChange}
                                        disabled={isSubmitting}
                                    />
                                    <label className="form-label" htmlFor="password">
                                        Password
                                    </label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form2Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">
                                        Forgot password?
                                    </a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Logging in..." : "Login"}
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{" "}
                                        <Link to="/register" className="link-danger">
                                            Register
                                        </Link>
                                    </p>

                                </div>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    {/* Copyright */}
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>

                    {/* Right */}
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginForm;
