import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const grow = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const EmBreve = styled.h1`
  z-index: 100;
  font-size: 3em;
  text-align: center;
  opacity: 0;
  animation: ${(props) =>
    props.$show
      ? css`
          ${grow} 3s ease-in-out forwards
        `
      : "none"};
`;

export default function Overlay() {
  const [showEmBreve, setShowEmBreve] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmBreve(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <EmBreve $show={showEmBreve}>Em breve...</EmBreve>;
}
