import EmptyContent from "../EmptyContent";
import Item from "../Item";
import * as S from "./styles";
import { useTodo } from "../../hooks/useTodo";

export default function ListTodos() {
  const { Todo } = useTodo();

  console.log("Opaaaaaaa: ", Todo);
  return (
    <>
      <S.Container>
        {Todo.length === 0 ? (
          <EmptyContent />
        ) : (
          <S.Content>
            {Todo.map((activity, index) => (
              <Item key={index} activity={activity.activity} index={index} />
            ))}
          </S.Content>
        )}
      </S.Container>
    </>
  );
}
