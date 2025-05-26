import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useTokenHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accept = localStorage.getItem("accept");

    if (accept !== "OK" && location.pathname !== "/login") {
      navigate("/login");
      return;
    }
  }, [location.pathname, navigate]);
};

export default useTokenHandler;
