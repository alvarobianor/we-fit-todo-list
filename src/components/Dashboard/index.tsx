import ListTodos from "../ListTodos";
import Panel from "../Panel";
import * as S from "./styles";
export default function Dashboard() {
  return (
    <>
      <S.Background>
        <S.Container>
          <Panel />
          <ListTodos />
        </S.Container>
      </S.Background>
    </>
  );
}
