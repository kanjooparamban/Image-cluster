import React from 'react';
import './App.css';

export default function From() {
    return (
        <div className="container">
            <h1 className="heading">Welcome! </h1>
            <p className="subheading">Please Enter your details.</p>
            <div className="form">
                <div>
                    <label className="label">Username</label>
                    <input
                        className="input"
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <label className="label">Email</label>
                    <input
                        className="input"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label className="label">Password</label>
                    <input
                        className="input"
                        placeholder="Enter your password"
                        type="password"
                    />
                </div>
                <div className="checkbox-container">
                    <div>
                        <input
                            type="checkbox"
                            id="remember"
                        />
                        <label className="checkbox-label" htmlFor="remember">Remember Me</label>
                    </div>
                </div>
                <div className="button-container">
                    <button className="signin-button">Sign up</button>
                </div>
            </div>
        </div>
    );
}
