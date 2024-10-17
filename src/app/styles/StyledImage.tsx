import { useState, useEffect } from "react";
import styled from "styled-components";

// Array com as imagens que você quer exibir
const images = [
  "./assets/busenes.svg",
  "./assets/terceiro.svg",
  "./assets/quarto.svg",
 
];

const StyledImage = styled.img`
  width: 80%;
  border-radius: 10px;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.show ? 1 : 0)}; 
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show, setShow] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); 

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
        setShow(true); 
      }, 1000); 
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <StyledImage src={images[currentImageIndex]} alt="Imagem do trabalho" show={show} />
    </CarouselContainer>
  );
};

export default MyComponent;
