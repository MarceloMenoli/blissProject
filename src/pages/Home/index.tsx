import { useEffect, useState } from "react";
import fetchHealth from "../../services/blissApi";

export const Home = () => {
  const [serverStatus, setServerStatus] = useState("");
  const [isLoading, setIsloading] = useState<boolean>(false);

  const minhaArrowFunction = async () => {
    setIsloading(true);
    try {
      const data = await fetchHealth();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    minhaArrowFunction();
  }, []);

  if (serverStatus === "") {
    return <div>Loading Screen</div>;
  } else if (serverStatus === "OK") {
    return <div>List Screen</div>;
  } else {
    return <p>Failed to connect to server.</p>;
  }
};
