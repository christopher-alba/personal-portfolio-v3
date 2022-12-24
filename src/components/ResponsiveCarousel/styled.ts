import styled from "styled-components";

export const MainWrapper = styled("div")`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondaryMain};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  & > div {
    height: 100%;
    width: 100%;
  }
  position: relative;
  user-select: none;
`;

export const ThumbnailWrapper = styled("div")`
  padding-top: 5px;
  padding-left: 2px;
  margin-top: 10px;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: visible;
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

export const Thumbnail = styled("div")`
  width: 70px;
  height: 35px;
  overflow: hidden;
  margin-right: 10px;
  display: inline-block;
  box-sizing: border-box;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  cursor: pointer;
  user-select: none;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const ArrowLeftDiv = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  width: 50px !important;
  display: flex;
  transition: 500ms;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryTransparent};
  }
  cursor: pointer;
`;
export const ArrowRightDiv = styled("div")`
  position: absolute;
  right: 0;
  top: 0;
  width: 50px !important;
  display: flex;
  transition: 500ms;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryTransparent};
  }
  cursor: pointer;
`;
