import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  &.open div:nth-child(2) {
    opacity: 0;
    transform: rotate(45deg);
  }
  &.open div:nth-child(1) {
    transform: translateY(20px);
  }
  &.open div:nth-child(3) {
    transform: translateY(-20px);
    rotate(-45deg);
  }
`;

export default StyledBurger;
