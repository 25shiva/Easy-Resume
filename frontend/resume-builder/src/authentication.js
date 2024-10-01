import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null); // Initialize email as an empty string
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const navigate = useNavigate(); 

    const loginAction = async (data) => {
        try {
            const response = await axios.post("http://localhost:2523/login/", { ...data });
            const { token, email } = response.data;

            setToken(token);
            setEmail(email); 
            localStorage.setItem("token", token);
            localStorage.setItem("email", email); // Store email as a plain string

            return token;
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("email"); 

        if (savedToken && savedUser) {
            setToken(savedToken);
            setEmail(savedUser); // Set email from localStorage
        }

        setIsLoading(false); // Once localStorage is checked, loading is done
    }, []);
     
    const logOut = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
         
        setToken(null);
        setEmail(''); 
        navigate('/'); 
        console.log('Token and user details removed from localStorage');
    };


    if (isLoading) {
        return <div>Loading...</div>; 
    }

    return (
        <AuthContext.Provider value={{ token, email, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
};
