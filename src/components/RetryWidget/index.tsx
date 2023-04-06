import { Loader } from "../Loader";
import { RetryWidgetContainer } from "./styles";

type Props = {
  onRetry: () => void;
  isLoading: boolean;
};

export const RetryWidget = ({ onRetry, isLoading }: Props) => {
  return (
    <RetryWidgetContainer>
      <h1>Server is not healthy</h1>
      {isLoading ? <Loader /> : <button onClick={onRetry}>Retry</button>}
    </RetryWidgetContainer>
  );
};
