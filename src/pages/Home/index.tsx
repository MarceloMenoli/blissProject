import { useEffect, useState } from "react";
import fetchHealth from "../../services/blissApi";
import { useNavigate } from "react-router-dom";
import { LoadingScreen } from "../../components/LoadingScreen";
import { RetryWidget } from "../../components/RetryWidget";

export const Home = () => {
  const [serverStatus, setServerStatus] = useState<string>("");

  const navigate = useNavigate();

  const checkServerHealth = async () => {
    try {
      const data = await fetchHealth();
      setServerStatus(data.status);
      navigate("/questions");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkServerHealth();
  }, []);

  return (
    <div>
      {serverStatus === "" ? (
        <LoadingScreen />
      ) : serverStatus !== "OK" ? (
        <RetryWidget onRetry={() => checkServerHealth()} />
      ) : null}
    </div>
  );
};
