import styled from 'styled-components';

interface LoaderProps {
  size?: string;
  color?: string;
}

export const LoaderContainer = styled.div<LoaderProps>`
  display: inline-block;
  width: ${props => props.size || '16px'};
  height: ${props => props.size || '16px'};
  border-radius: 50%;
  border: 2px solid ${props => props.color || '#ccc'};
  border-top-color: transparent;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
