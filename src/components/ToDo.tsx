import styled from 'styled-components';
import { FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineCheck } from 'react-icons/hi';
import { SiPinboard } from 'react-icons/si';
import { FaStickyNote } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const Container = styled.div`
  padding-top: 20px;
  position: relative;
`;
const Contents = styled.div`
  gap: 0 10px;
  display: flex;
  align-items: start;
`;

const CheckBoxButton = styled.button`
  width: 21.5px;
  height: 21.5px;
  background-color: #3f464e;
  border: 1px solid #292d32;
  border-radius: 2.5px;
  padding: 0;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.span`
  flex: 1;
  text-decoration: line-through;
`;

const SpotButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  justify-content: end;
`;

const SubTitle = styled.span`
  flex: 1;
  font-size: 12px;
  color: #ffffff52;
  margin: 5px 31.5px 0 31.5px;
  max-width: calc(400px - 62px);
  line-height: 120%;
`;

const SpotMenu = styled.div`
  bottom: -82.5px;
  right: 0px;
  position: absolute;
  background-color: #40464e;
  box-shadow: 0px 0px 5px #0000002e;
`;

const SpotMenuTriangle = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  top: -3px;
  right: 5px;
  background-color: #40464e;
  transform: rotate(45deg);
`;

const SpotMenuUl = styled.ul`
  padding: 15px;
`;

const SpotMenuLi = styled.li`
  height: 25px;
  width: 100px;
  :last-child {
    margin-bottom: 0;
  }
  margin-bottom: 5px;
  list-style: none;
`;

const SpotMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0 10px;
  width: 100%;
  height: 100%;
  padding: 0;
  :hover {
    :first-child,
    .text {
      transition: all 150ms ease;
      color: #ee5885;
    }
  }
`;

const SpotMenuButtonText = styled.span`
  font-size: 12px;
  color: white;
`;
const ToDo = () => {
  const onAddMemo = () => {
    prompt('메모 입력', '');
  };

  return (
    <Container>
      <Contents>
        <CheckBoxButton>
          <HiOutlineCheck size={14}></HiOutlineCheck>
        </CheckBoxButton>
        <Title>Getting an invite for dribble</Title>
        <SpotButton>
          <FiMoreHorizontal size={20}></FiMoreHorizontal>
        </SpotButton>
      </Contents>
      <Contents>
        <SubTitle>
          one of my goals in 2018 one of my goals in 2018 one of my goals in
          2018 one of my goals in 2018
        </SubTitle>
      </Contents>
      <SpotMenu>
        <SpotMenuTriangle></SpotMenuTriangle>
        <SpotMenuUl>
          <SpotMenuLi>
            <SpotMenuButton>
              <SiPinboard size={13}></SiPinboard>
              <SpotMenuButtonText className="text">
                Pin on the top
              </SpotMenuButtonText>
            </SpotMenuButton>
          </SpotMenuLi>
          <SpotMenuLi>
            <SpotMenuButton onClick={onAddMemo}>
              <FaStickyNote size={13}></FaStickyNote>
              <SpotMenuButtonText className="text">
                Add a memo
              </SpotMenuButtonText>
            </SpotMenuButton>
          </SpotMenuLi>
          <SpotMenuLi>
            <SpotMenuButton>
              <RiDeleteBin6Fill size={13}></RiDeleteBin6Fill>
              <SpotMenuButtonText className="text">Delete</SpotMenuButtonText>
            </SpotMenuButton>
          </SpotMenuLi>
        </SpotMenuUl>
      </SpotMenu>
    </Container>
  );
};

export default ToDo;
