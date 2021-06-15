import * as S from "./styles";
import PlusIcon from "../../assets/ic-add.png";
import { useState } from "react";
import { useTodo } from "../../hooks/useTodo";

export default function Panel() {
  const [activity, setActivity] = useState<string>("");

  const { addTodo } = useTodo();

  const createTodo = () => {
    addTodo(activity);
    setActivity("");
  };

  return (
    <>
      <S.Container>
        <S.Input
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <S.ContainerIcon>
          <img src={PlusIcon} alt="Plus Icons" onClick={createTodo} />
        </S.ContainerIcon>
      </S.Container>
    </>
  );
}
