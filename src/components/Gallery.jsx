import { useState } from "react";
import { styled } from "styled-components";

const DivGallery = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-child {
    width: calc(100%);
    height: calc(80vh - 40px);
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

  div:nth-child(2) {
    width: 100%;
    height: calc(20vh - 20px);
    margin-bottom: 20px;
    padding: 10px;
    background-color: var(--green3);
    display: flex;
    overflow-x: auto;

    img {
      height: 100%;
    }

    img:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

const ModalGallery = styled.div`
  z-index: 5000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  img {
    object-fit: contain;
    width: 100vw;
    max-height: 100vh;
  }
`;

const Gallery = () => {
  const [nowPage, setNowPage] = useState("01");
  const [modalGallery, setModalGallery] = useState(false);

  const onClickChangeImage = (event) => {
    setNowPage(event.target.alt);
  };

  const onClickModalOpen = () => {
    setModalGallery(true);
  };

  const onClickModalClose = () => {
    setModalGallery(false);
  };

  return (
    <>
      {modalGallery ? (
        <ModalGallery onClick={onClickModalClose}>
          <div>
            <img src={`album/${nowPage}.jpg`} alt="결혼사진" />
          </div>
        </ModalGallery>
      ) : null}
      <DivGallery>
        <div>
          <img
            src={`album/${nowPage}.jpg`}
            alt="결혼사진"
            onClick={onClickModalOpen}
          />
        </div>
        <div>
          <img src="album/01.jpg" alt="01" onClick={onClickChangeImage} />
          <img src="album/02_03.jpg" alt="02_03" onClick={onClickChangeImage} />
          <img src="album/04_05.jpg" alt="04_05" onClick={onClickChangeImage} />
          <img src="album/06_07.jpg" alt="06_07" onClick={onClickChangeImage} />
          <img src="album/08_09.jpg" alt="08_09" onClick={onClickChangeImage} />
          <img src="album/10_11.jpg" alt="10_11" onClick={onClickChangeImage} />
          <img src="album/12_13.jpg" alt="12_13" onClick={onClickChangeImage} />
          <img src="album/14_15.jpg" alt="14_15" onClick={onClickChangeImage} />
          <img src="album/16_17.jpg" alt="16_17" onClick={onClickChangeImage} />
          <img src="album/18_19.jpg" alt="18_19" onClick={onClickChangeImage} />
          <img src="album/20_21.jpg" alt="20_21" onClick={onClickChangeImage} />
          <img src="album/22_23.jpg" alt="22_23" onClick={onClickChangeImage} />
          <img src="album/24_25.jpg" alt="24_25" onClick={onClickChangeImage} />
          <img src="album/26_27.jpg" alt="26_27" onClick={onClickChangeImage} />
        </div>
      </DivGallery>
    </>
  );
};

export default Gallery;
