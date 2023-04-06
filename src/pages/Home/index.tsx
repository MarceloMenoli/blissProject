import { useEffect, useState } from "react";
import { fetchHealth } from "../../services/blissApi";
import { useNavigate } from "react-router-dom";
import { LoadingScreen } from "../../components/LoadingScreen";
import { RetryWidget } from "../../components/RetryWidget";

export const Home = () => {
  const [serverStatus, setServerStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const checkServerHealth = async () => {
    setIsLoading(true);
    try {
      const data = await fetchHealth();
      setServerStatus(data.status);
      navigate("/questions?filter=");
    } catch (error) {
      console.log(error);
      setServerStatus("NOT OK");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkServerHealth();
  }, []);

  return (
    <div>
      {serverStatus === "" && <LoadingScreen />}
      {serverStatus === "OK" && (
        <RetryWidget
          isLoading={isLoading}
          onRetry={() => checkServerHealth()}
        />
      )}
    </div>
  );
};
