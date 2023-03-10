import { FC } from "react";
import {
  ContentWrapper,
  LoadingText,
  MainWrapper,
  ProgressBar,
  ProgressMainWrapper,
  ProgressText,
  SuccessText,
} from "./styled";

const Loading: FC<{ msCount: number }> = ({ msCount }) => {
  return (
    <MainWrapper id="Loading">
      <ContentWrapper>
        {(msCount / 4000) * 100 >= 100 ? (
          <SuccessText>Successfully Loaded chrisalba.exe</SuccessText>
        ) : (
          <LoadingText>Loading chrisalba.exe...</LoadingText>
        )}
        <ProgressMainWrapper>
          <ProgressBar
            style={{
              width: (msCount / 4000) * 100 + "%",
              background: (msCount / 4000) * 100 >= 100 ? "white" : "",
            }}
          ></ProgressBar>
          <ProgressText>{((msCount / 4000) * 100).toFixed(2)} %</ProgressText>
        </ProgressMainWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Loading;
