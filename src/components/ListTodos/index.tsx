import EmptyContent from "../EmptyContent";
import Item from "../Item";
import * as S from "./styles";
export default function ListTodos() {
  return (
    <>
      <S.Container>
        {1 + 2 === 4 && <EmptyContent />}
        <S.Content>
          <Item />
          <Item />
        </S.Content>
      </S.Container>
    </>
  );
}
