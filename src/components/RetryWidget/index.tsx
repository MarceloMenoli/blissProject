type Props = {
  onRetry: () => void;
};

export const RetryWidget = ({ onRetry }: Props) => {
  return (
    <div>
      <p>Server is not healthy</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};
