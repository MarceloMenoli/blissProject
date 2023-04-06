import { useLocation } from "react-router-dom";
import { Container } from "../../layout/Container";
import { useState } from "react";
import { Input, ShareForm } from "./styles";

export const ShareScreen = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();
  const { url } = location?.state;

  const handleShare = () => {
    // implemente aqui a lógica de compartilhamento
    console.log(`Compartilhando a URL ${url} com o e-mail ${email}`);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Container>
      <h1>Share Screen</h1>
      <ShareForm>
      <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>URL:</label>
        <Input type="text" readOnly value={url} />
        <button onClick={handleShare}>Compartilhar</button>
      </ShareForm>
    </Container>
  );
};
