import * as S from "./styles";
import PlusIcon from "../../assets/ic-add.png";
export default function Panel() {
  return (
    <>
      <S.Container>
        <S.Input />
        <S.ContainerIcon>
          <img src={PlusIcon} alt="Plus Icons" />
        </S.ContainerIcon>
      </S.Container>
    </>
  );
}
