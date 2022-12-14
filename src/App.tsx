import { useState } from 'react';
import styled from 'styled-components';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import ToDo from './components/ToDo';
const Container = styled.div`
  min-width: 400px;
  min-height: 100%;
`;

const Header = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 35px;
`;

const DayWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 8px 0;
`;

const Day = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: white;
`;

const Etc = styled.span`
  font-size: 12.5px;
  font-weight: 600;
  color: #646f7a;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const ToDoList = styled.ul`
  margin: 0;
  padding: 0;
`;

const InputWrapper = styled.div`
  padding: 10px;
  background-color: #2e3338;
  border: 1px solid #292d32;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

const Input = styled.input`
  flex: 1;
  display: flex;
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: 600;
  ::placeholder {
    color: #5d646a;
    font-weight: 400;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container className="App">
      <Header>
        <ArrowButton>
          <IoChevronBackSharp size={30} color={'#414951'}></IoChevronBackSharp>
        </ArrowButton>
        <DayWrapper>
          <Day>Thursday</Day>
          <Etc>Mar 23, 2018</Etc>
        </DayWrapper>
        <ArrowButton>
          <IoChevronForwardSharp
            size={30}
            color={'#414951'}
          ></IoChevronForwardSharp>
        </ArrowButton>
      </Header>
      <InputWrapper>
        <AiOutlineAlignLeft size={22} color={'#414951'}></AiOutlineAlignLeft>
        <Input placeholder="Add a task...."></Input>
      </InputWrapper>
      <ToDoList>
        <ToDo></ToDo>
      </ToDoList>
    </Container>
  );
}

export default App;
