import styled from 'styled-components';
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const MenuLabel = styled.label`
    background-color: whitesmoke;
    position: fixed;
    top: 6rem;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    z-index: 1000;
    text-align: center;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 2.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const BurgMenu = () => {

    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    const menuItems = [
        { label: "Home", path: "/" },
      ];
  
  return (
    <>
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                <Icon clicked={click}>&nbsp;</Icon>
          </MenuLabel>
          {isOpen && ( 
        <nav>
          {menuItems.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
        </>
      );
}

export default BurgMenu