import React from 'react';
import styled from 'styled-components';

const MyButton = ({ children }) => {
  return (
    <StyledWrapper>
      <button className="Btn">
        {children}
      </button>
    </StyledWrapper>

  );
}

const StyledWrapper = styled.div`
  .Btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto; /* Mudei para 'auto' para o botão se ajustar ao texto */
    min-width: 120px; /* Adicionei uma largura mínima */
    height: 40px;
    border: none;
    padding: 0px 20px;
    background-color: rgba(92, 10, 148, 1);
    color: white;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 5px 5px 0px rgba(105, 8, 170, 0.82);
    transition-duration: .3s;
  }
  .Btn:hover {
    box-shadow: 10px 10px 0px rgba(105, 8, 170, 0.82);
    transform: translateY(-2px);
    background-color: rgba(92, 10, 148, 0.8);
  }`;

export default MyButton;