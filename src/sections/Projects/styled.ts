import styled from "styled-components";

export const OuterDiv = styled("div")`
  padding: 150px;
`;

export const MainDiv = styled("div")`
  padding-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  box-sizing: border-box;
`;

export const ProjectImg = styled("img")`
  width: 50%;
  height: 400px;
  object-fit: cover;
  object-position: center;
`;
export const ContentWrapper = styled("div")`
  width: 50%;
  padding: 0 50px;
  box-sizing: border-box;
`;

export const CarouselButton = styled("button")`
  background: transparent;
  border: none;
  padding: 20px;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondaryMain};
  &:hover {
    background: ${({ theme }) => theme.colors.primarySub};
  }
  cursor: pointer;
`;

export const ThumbnailWrapper = styled("div")`
  display: flex;
  padding: 50px;
  width: 50%;
  margin: 0 auto;
  overflow: auto;
  user-select: none;
  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const Thumbnail = styled("img")`
  width: 140px;
  height: 70px;
  object-fit: cover;
  object-position: center;
  user-drag: none;
  margin: 0 10px;
`;

export const PSArchived = styled("div")`
  border: 2px solid #ffd000;
  width: fit-content;
  font-size: 0.7rem;
  color: #ffd000;
  padding: 10px 30px;
`;

export const PSFeatured = styled("div")`
  border: 2px solid #00d235;
  width: fit-content;
  font-size: 0.7rem;
  color: #00d235;
  padding: 10px 30px;
`;

export const PSSNLD = styled("div")`
  border: 2px solid #ff3838;
  width: fit-content;
  font-size: 0.7rem;
  color: #ff3838;
  padding: 10px 30px;
`;

export const PSUC = styled("div")`
  border: 2px solid #ffaf38;
  width: fit-content;
  font-size: 0.7rem;
  color: #ffaf38;
  padding: 10px 30px;
`;

export const ProjectStatuses = styled("div")`
  display: flex;
  & > div {
    margin-right: 10px;
  }
`;

export const StyledHR = styled("hr")`
  border-color: ${({ theme }) => theme.colors.secondaryMain};
  margin: 20px 0;
`;

export const TagsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const TagsWrapperWrapper = styled("div")`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const TagsWrapperOuter = styled("div")`
  flex-grow: 1;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ProjectSubTitle = styled("p")`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const DevicePill = styled("div")`
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.secondaryMain};
  color: ${({ theme }) => theme.colors.primaryMain};
  padding: 5px 10px;
  margin-right: 20px;
  margin-bottom: 20px;
`;
