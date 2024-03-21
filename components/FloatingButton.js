import Image from 'next/image';
import styled from 'styled-components';
import React, { useState } from 'react';
import img from '../public/floatingbutton3.svg';
import img2 from '../public/floatingbutton2.svg';

const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  width: 90px;
  height: 90px;
  border: none;
  cursor: pointer;
  z-index: 9999;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  // 이미지 전환 효과
  &.clicked {
    height: 190px;
    margin-top: -110px;
    background-image: url(${img2.src}); // img2를 배경 이미지로 사용
  }

  &:not(.clicked) {
    background-image: url(${img.src}); // img를 배경 이미지로 사용
  }
`;

const FloatingButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    console.log('Floating Button Clicked', clicked);
    setClicked(!clicked);
  };

  return (
    <FloatingButtonWrapper>
      <Button onClick={handleClick} className={clicked ? 'clicked' : ''} />
    </FloatingButtonWrapper>
  );
};

export default FloatingButton;

