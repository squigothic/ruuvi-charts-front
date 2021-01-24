import styled from 'styled-components';

const Button = styled.button<{ marginTop?: number }>`
  height: 23px;
  background: white;
  border: 2px solid #274262;
  border-radius: 3px;
  color: #274262;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : null)};
  }
`;

export default Button;
