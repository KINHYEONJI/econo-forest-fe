import styled from "styled-components";
import Person from "./Person";
import resetButton from "../../images/resetButton.webp";
import { useState } from "react";

function StatusBar() {
  const [statusInfo, setStatusInfo] = useState([]);
  const handleStatusInfoReset = () => {};
  return (
    <Section>
      <CurrentNumberPeople>
        <div className="title">현재 동아리 인원수</div>
        <div className="number-people">00 명</div>
      </CurrentNumberPeople>

      <CurrentPeople>
        <Title>
          <div className="title">I AM IN 동방</div>
          <img
            className="reset-button"
            src={resetButton}
            alt="reset button"
            onClick={handleStatusInfoReset}
          />
        </Title>

        <CurrentPeopleList>
          <Person
            isHere={true}
            profileImgSrc={
              "http://image.dongascience.com/Photo/2017/07/14994185580021.jpg"
            }
            generation="22"
            name="경주원"
          />
          <Person isHere={true} />
          <Person isHere={true} />
          <Person isHere={false} />
        </CurrentPeopleList>
      </CurrentPeople>

      <MyAccount>
        <Title>
          <div className="title">MY PAGE</div>
        </Title>
        <Person isHere={true} generation="22" name="경주원" isSelf={true} />
      </MyAccount>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  padding: 50px 25px 40px 25px;
  background-color: ${(props) => props.theme.yellow};

  display: grid;
  grid-template-rows: 40px auto 100px;
`;

const CurrentNumberPeople = styled.div`
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.white};
  border-radius: 10px;

  font-family: ${(props) => props.theme.logoFont};
  font-size: ${(props) => props.theme.subtitleFontSize};
`;

const CurrentPeople = styled.div`
  padding: 15px 0 15px 0;

  display: grid;
  grid-template-rows: auto 1fr;
`;

const Title = styled.div`
  padding: 10px 15px 15px 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .title {
    padding-right: 15px;
    font-family: ${(props) => props.theme.logoFont};
    font-size: ${(props) => props.theme.subtitleFontSize};
  }

  .reset-button {
    width: 25px;
    height: 25px;
    object-fit: cover;
    cursor: pointer;
  }
`;

const CurrentPeopleList = styled.div`
  width: 100%;
  min-height: calc(100vh - 315px);

  padding: 15px;

  background-color: #ffe5a5;
  border-radius: 10px;

  overflow: scroll;
`;

const MyAccount = styled.div``;

export default StatusBar;
