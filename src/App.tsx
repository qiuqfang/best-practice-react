import { useBearStore } from "./store/bear";
import styled from "styled-components";
import { useCallback, useMemo, useState } from "react";
import Child from "./components/Child";
import Tiptap from "./components/Tiptap/Tiptap";

function App() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const reducePopulation = useBearStore((state) => state.reducePopulation);

  const [isShow, setIsShow] = useState(false);

  const person = { name: 1 };

  const personMemo = useMemo(() => person, [person.name]);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
    setIsShow(!isShow);
  };
  const handleClickCallBack: React.MouseEventHandler<HTMLButtonElement> =
    useCallback((e) => {
      console.log(e);
      setIsShow(!isShow);
    }, []);

  return (
    <div className="App">
      <BearsWrapper>
        <div>Bears: {bears}</div>
        <div className="bears_btn_group">
          <button onClick={() => increasePopulation()}>增加</button>
          {"  "}
          <button onClick={() => reducePopulation()}>减少</button>
        </div>
      </BearsWrapper>
      <Child index="1" person={person} onClick={handleClick} />
      <Child index="2" person={personMemo} onClick={handleClickCallBack} />

      <Tiptap />
    </div>
  );
}

export default App;

export const BearsWrapper = styled.div`
  width: 500px;
  padding: 20px;
  margin: 0 auto;
  background-color: #f3baba;
  border-radius: 5px;

  .bears_btn_group {
    margin-top: 20px;
    button {
      width: 50px;
      outline: none;
    }
  }
`;
