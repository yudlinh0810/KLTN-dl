import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useTokenHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");

    if (!expirationTime && location.pathname !== "/login") {
      navigate("/login");
      return;
    }
  }, [location.pathname, navigate]);
};

export default useTokenHandler;
