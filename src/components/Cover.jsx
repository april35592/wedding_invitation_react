import { useEffect, useRef } from "react";
import { styled } from "styled-components";

const DivCover = styled.div`
  width: 100%;
  max-width: 600px;
  height: min-content;
  position: fixed;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${(props) => props.$zIndex};

  img {
    width: calc(100% - 20px);
  }

  @media (max-width: 600px) {
    width: calc(100%);
  }
`;

const Cover = ({ page, height }) => {
  const cover1 = useRef();
  const cover2 = useRef();
  const cover3 = useRef();

  const coverPage = 4;

  useEffect(() => {
    const root = document.querySelector("#root");
    const main = document.querySelector("#main");
    // const homeHeight = root.getBoundingClientRect().bottom / page;
    const homeHeight = (window.innerHeight * 0.01 * height) / page;
    document.addEventListener("scroll", () => {
      if (cover1.current) {
        const innerPage = window.scrollY / (homeHeight / coverPage);
        cover1.current.style.opacity = 1 - innerPage;
        root.style.backgroundColor = `rgba(227,230,232,${0 + innerPage})`;
        cover2.current.style.opacity = 2 - innerPage;
        if (main) {
          main.style.opacity = -1 + innerPage;
        }
        cover3.current.style.opacity = 3 - innerPage;
        if (innerPage > 3) {
          cover1.current.style.display = "none";
          cover2.current.style.display = "none";
          cover3.current.style.display = "none";
        } else {
          cover1.current.style.display = "flex";
          cover2.current.style.display = "flex";
          cover3.current.style.display = "flex";
        }
      }
    });
  }, []);

  return (
    <>
      <DivCover $zIndex="3" ref={cover1}>
        <img src="euc1.png" alt="cover1" />
      </DivCover>
      <DivCover $zIndex="2" ref={cover2}>
        <img src="euc2.png" alt="cover1" />
      </DivCover>
      <DivCover $zIndex="1" ref={cover3}>
        <img src="euc3.png" alt="cover1" />
      </DivCover>
    </>
  );
};

export default Cover;
