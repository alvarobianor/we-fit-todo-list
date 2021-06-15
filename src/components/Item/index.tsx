import * as S from "./styles";
import TrashIcon from "../../assets/ic-delete.png";
import { useTodo } from "../../hooks/useTodo";

interface ItemProps {
  activity: string;
  index: number;
}
export default function Item({ activity, index }: ItemProps) {
  const { removeTodo } = useTodo();

  return (
    <>
      <S.Container>
        <p>{activity !== "" ? activity : "Nenhum item cadastrado"}</p>
        <img
          src={TrashIcon}
          alt="Trash Icon"
          onClick={() => removeTodo(index)}
        />
      </S.Container>
    </>
  );
}
