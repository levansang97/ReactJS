import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            agreeTerms: false,
        };
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({
            [name]: type === "checkbox" ? checked : value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, repeatPassword, agreeTerms } = this.state;

        // Simple validation
        if (!name || !email || !password || !repeatPassword) {
            this.writeLog(1, "Please fill in all fields!");
            return;
        }

        if (password !== repeatPassword) {
            this.writeLog(2, "Passwords do not match!");
            return;
        }

        if (!agreeTerms) {
            this.writeLog(2, "You must agree to the Terms of Service!");
            return;
        }

        // Submit data
        console.log("Form submitted:", this.state);
        this.writeLog(0, "Registration successful!");
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
        const { name, email, password, repeatPassword, agreeTerms } = this.state;

        return (
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        {/* Form */}
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>

                                            <form className="mx-1 mx-md-4" onSubmit={this.handleSubmit}>
                                                {/* Name */}
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            className="form-control"
                                                            name="name"
                                                            value={name}
                                                            onChange={this.handleChange}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1c">
                                                            Your Name
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            className="form-control"
                                                            name="email"
                                                            value={email}
                                                            onChange={this.handleChange}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example3c">
                                                            Your Email
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Password */}
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                            name="password"
                                                            value={password}
                                                            onChange={this.handleChange}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4c">
                                                            Password
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Repeat Password */}
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="form3Example4cd"
                                                            className="form-control"
                                                            name="repeatPassword"
                                                            value={repeatPassword}
                                                            onChange={this.handleChange}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4cd">
                                                            Repeat your password
                                                        </label>
                                                    </div>
                                                </div>

                                                {/* Agree Terms */}
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        id="form2Example3c"
                                                        name="agreeTerms"
                                                        checked={agreeTerms}
                                                        onChange={this.handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="form2Example3c">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                {/* Submit Button */}
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                            <ToastContainer />
                                        </div>

                                        {/* Image */}
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="Sample"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RegisterForm;
