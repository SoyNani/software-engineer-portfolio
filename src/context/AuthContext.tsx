"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem("is_recruiter_auth");
        if (storedAuth === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (username: string, password: string) => {
        const envUser = process.env.NEXT_PUBLIC_RECRUITER_USER;
        const envPass = process.env.NEXT_PUBLIC_RECRUITER_PASSWORD;

        if (username === envUser && password === envPass) {
            setIsLoggedIn(true);
            localStorage.setItem("is_recruiter_auth", "true");
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("is_recruiter_auth");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
