import { PopupContainer, PopupItem } from "./Popup.styles";
import bin from "../../assets/bin.png";
import editpen from "../../assets/editpen.png";

export const Popup = () => {
  return (
    <PopupContainer>
      <PopupItem>
        <img src={bin} alt="" /> Delete
      </PopupItem>
      <PopupItem>
        <img src={editpen} alt="" /> Edit
      </PopupItem>
    </PopupContainer>
  );
};
