import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useState } from "react";

import NonEditModal from "./NonEditModal";
import PlanButtonStyle from "../../styles/eat/PlanButtonStyle";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";
import ModalInfo from "../../styles/eat/ModalInfo";

function ParticipateButton({ info }) {
  const [open, setOpen] = useState(false);
  const setIsPopUpOpen = useSetRecoilState(isPopUpOpenState);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
          setIsPopUpOpen(true);
        }}
      >
        {EAT_INFO_BUTTONS.KOREAN["PARTICIPATE"]}
      </Button>
      <NonEditModal
        modalType={EAT_INFO_BUTTONS.KOREAN["PARTICIPATE"]}
        title={info.title + "에 참여하시겠습니까?"}
        isAuthor={info.isAuthor}
        infoTitle={info.title}
        infoNumParticipant={info.numParticipant}
        open={open}
        setOpen={setOpen}
      >
        <ModalInfo>
          <div className="title">날짜</div>
          <div className="text">{info.authorName}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">장소</div>
          <div className="text">{info.location}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">날짜</div>
          <div className="text">{info.date}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">시간</div>
          <div className="text">{info.date}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">글쓴이</div>
          <div className="text">{info.authorName}</div>
        </ModalInfo>
      </NonEditModal>
    </>
  );
}

const Button = styled(PlanButtonStyle)`
  background-color: ${(props) => props.theme.orange};
  cursor: pointer;
`;

export default ParticipateButton;
