import EmptyContent from "../EmptyContent";
import * as S from "./styles";
export default function Panel() {
  return (
    <>
      <S.Container>
        {/* {1 + 2 === 4 && <EmptyContent />} */}
        <S.Content>
          <S.Square />
          <S.Square />
          {/* <S.Square />
          <S.Square />
          <S.Square />  
          <S.Square />
          <S.Square /> */}
        </S.Content>
      </S.Container>
    </>
  );
}
