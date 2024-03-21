import React, { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { isMobile as isMobileDeviceDetect } from "react-device-detect";

const Container = styled.div`
  h1 {
    margin: 48px auto;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }
`;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(isMobileDeviceDetect);
    }
  }, []);

  return isMobile;
};

function Detect( {mobilePage , desktopPage} ) {
  const isMobile = useIsMobile();

  return (
    <Container>
      {isMobile ? mobilePage : desktopPage}
    </Container>
  );
}

export default Detect;
