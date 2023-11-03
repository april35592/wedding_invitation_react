import { useEffect } from "react";
import { styled } from "styled-components";

const DivInfo = styled.div`
  margin-top: calc(${(props) => props.$marginTop}vh);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 350px) {
    font-size: var(--fs-small);
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > div:not(:first-child) {
    margin-top: 12px;
  }

  & > div.intro {
    text-align: center;
    padding: 20px;
    border: 4px double var(--green3);
    border-radius: 15px;

    p {
      color: var(--green1);
      margin: 2px 0;
    }

    p:first-child {
      padding-bottom: 10px;
      margin-bottom: 10px;
      width: 100%;
      font-size: var(--fs-xxlarge);
      border-bottom: 1px solid var(--black-075);
    }
  }

  & > div.tel {
    p {
      color: var(--black-800);
      padding: 10px 0;
    }

    p:nth-child(n + 2) {
      border-top: 1px solid var(--black-075);
    }
  }

  & > div.parents {
    flex-direction: row;
    text-align: center;
    color: var(--black-800);

    & > div > p:first-child {
      color: var(--green2);
      font-weight: 600;
    }

    & > div:not(:first-child) {
      margin-left: 20px;
      padding-left: 20px;
      border-left: 1px solid var(--black-075);
    }

    p:not(:first-child) {
      margin-top: 4px;
    }
  }
`;

const DivInfoMore = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 350px) {
    font-size: var(--fs-small);
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  & > div.mapContainer {
    width: 100%;

    & > div#map {
      width: 320px;
      height: 200px;
      margin: 4px 0;

      @media (max-width: 320px) {
        width: 100%;
      }
    }
  }

  & > div.adress {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--black-400);
    font-size: var(--fs-small);
  }

  & > div.transportation {
    margin-top: 8px;
    color: var(--black-200);
    font-size: var(--fs-small);
  }

  & > div.account {
    margin-top: 20px;
    font-size: var(--fs-small);
    color: var(--black-200);

    & > p:first-child {
      margin-bottom: 4px;
    }

    & strong {
      font-size: var(--fs-normal);
      color: var(--black-400);
    }
  }
`;

const Info = ({ marginTop }) => {
  useEffect(() => {
    //eslint-disable-next-line
    var map = new naver.maps.Map("map", {
      //eslint-disable-next-line
      center: new naver.maps.LatLng(35.100365, 129.034611),
      zoom: 15,
      minZoom: 10,
      zoomControl: true,
      zoomControlOptions: {
        //eslint-disable-next-line
        position: naver.maps.Position.TOP_RIGHT,
      },
    });
    //eslint-disable-next-line
    var marker = new naver.maps.Marker({
      //eslint-disable-next-line
      position: new naver.maps.LatLng(35.100365, 129.034611),
      map: map,
    });
  }, []);

  return (
    <>
      <DivInfo $marginTop={marginTop}>
        <div className="intro">
          <p>🌿</p>
          <p>평생을 같이하고 싶은 사람을 만났습니다.</p>
          <p>서로 아껴주고 이해하며</p>
          <p>사랑 베풀며 살고 싶습니다.</p>
          <p>저희 약속 위에 따뜻한 격려로 축복해 주셔서</p>
          <p>힘찬 출발의 디딤이 되어 주십시오.</p>
        </div>
        <div className="tel">
          <p>
            <a href="tel:010-3779-5133">
              신랑 <strong>김수현</strong> | 연락처 010-3779-5133
            </a>
          </p>
          <hr />
          <p>
            <a href="tel:010-6515-5182">
              신부 <strong>윤은소</strong> | 연락처 010-6515-5182
            </a>
          </p>
        </div>
        <div className="parents">
          <div>
            <p>신랑측</p>
            <p>
              아버지 <strong>김삼섭</strong>
            </p>
            <p>
              어머니 <strong>이차남</strong>
            </p>
          </div>
          <div>
            <p>신부측</p>
            <p>
              아버지 <strong>윤정근</strong>
            </p>
            <p>
              어머니 <strong>김경옥</strong>
            </p>
          </div>
        </div>
      </DivInfo>
      <DivInfoMore>
        <p>
          <strong>&lt; 오시는 길 &gt;</strong>
        </p>
        <div className="mapContainer">
          <div id="map"></div>
          <code id="snippet" className="snippet"></code>
        </div>
        <div className="adress">
          <p>부산호텔컨벤션웨딩홀</p>
          <p>부산 중구 광복로97번길 23 2층</p>
          <p>T. 051-257-3002, 3005</p>
        </div>
        <div className="transportation">
          <p>지하철: 1호선 남포역 7번 출구(도보 3분)</p>
          <p>버스: 부산 데파트 앞에서 하차</p>
          <p>(501, 15, 17, 26, 27, 41, 61, 70, 86, 87, 103, 1003)</p>
          <p>주차장 안내: 호텔 옆 노면 주차장 / 호텔 맞은편 주차장</p>
        </div>
        <div className="account">
          <p>
            <strong>&lt; 마음 전하실 곳 &gt;</strong>
          </p>
          <p>카카오뱅크 79797761614 김수현</p>
          <p>부산은행 1122149394205 윤은소</p>
        </div>
      </DivInfoMore>
    </>
  );
};

export default Info;
