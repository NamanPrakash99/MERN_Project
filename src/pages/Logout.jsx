import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ updateUserDetails }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5001/auth/logout', {}, {
                withCredentials: true
            });
            updateUserDetails(null);
            navigate("/login"); 
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return <p>Logging out...</p>; 
}

export default Logout;
