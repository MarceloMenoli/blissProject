import { useLocation } from "react-router-dom";
import { Container } from "../../layout/Container";
import { useState } from "react";
import { Input, ShareForm } from "./styles";
import { shareContentUrl } from "../../services/blissApi";
import { Loader } from "../../components/Loader";

export const ShareScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  const { url } = location?.state;

  const handleShare = async (email: string, url: string) => {
    setIsLoading(true);
    if (!email) {
      setIsLoading(false);
      return;
    }
    try {
      const data = await shareContentUrl(email, url);
      data.status === "OK" ? alert("Link compartilhado") : null;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Container>
      <h1>Share Screen</h1>
      <ShareForm>
        <label htmlFor="email">E-mail:</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>URL:</label>
        <Input type="text" readOnly value={url} />
        <button onClick={() => handleShare(email, url)}>
          {isLoading ? <Loader /> : "Share"}
        </button>
      </ShareForm>
    </Container>
  );
};
