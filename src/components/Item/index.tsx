import * as S from "./styles";
import TrashIcon from "../../assets/ic-delete.png";
export default function Item() {
  return (
    <>
      <S.Container>
        <p>Nenhum item cadastrado</p>
        <img src={TrashIcon} alt="Trash Icon" />
      </S.Container>
    </>
  );
}
