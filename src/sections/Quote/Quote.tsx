import { FC } from "react";
import { IconWrapper, MainWrapper } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { SpanTertiary } from "../About/styled";

const Quote: FC = () => {
  return (
    <MainWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faJedi} />
      </IconWrapper>

      <h2>
        <em>
          “In a dark place we find ourselves, and a little more knowledge lights
          our way.” - <SpanTertiary>Yoda</SpanTertiary>
        </em>
      </h2>
    </MainWrapper>
  );
};

export default Quote;
