import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowLeftDiv,
  ArrowRightDiv,
  MainWrapper,
  Thumbnail,
  ThumbnailWrapper,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "styled-components";

const ResponsiveCarousel: FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  const [index, setIndex] = useState(0);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    const ele = document.getElementById("container") as any;

    ele.scrollLeft = 0;
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    const mouseMoveHandler = function (e: any) {
      // How far the mouse has been moved

      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };
    const mouseUpHandler = function () {
      ele.style.cursor = "grab";
      ele.style.removeProperty("user-select");
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
    const mouseDownHandler = function (e: any) {
      pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };
      document.addEventListener("mousemove", mouseMoveHandler);
    };
    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  }, []);

  const incrementIndex = () => {
    if (index < children.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
      const ele = document.getElementById("container") as any;
      ele.scrollLeft = 0;
    }
    if (index === children.length / 2) {
      const ele = document.getElementById("container") as any;
      ele.scrollLeft = ele.scrollWidth;
    }
  };
  const decrementIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(children.length - 1);
      const ele = document.getElementById("container") as any;
      ele.scrollLeft = ele.scrollWidth;
    }
    if (index === children.length / 2) {
      const ele = document.getElementById("container") as any;
      ele.scrollLeft = 0;
    }
  };
  return (
    <div>
      <MainWrapper>
        <ArrowLeftDiv onClick={decrementIndex}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ArrowLeftDiv>
        <ArrowRightDiv onClick={incrementIndex} tabIndex={0}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ArrowRightDiv>
        {children[index]}
      </MainWrapper>
      <ThumbnailWrapper id="container">
        {children.map((child, thumbIndex) => (
          <Thumbnail
            draggable="false"
            tabIndex={0}
            id={index === thumbIndex ? "selected" : ""}
            onClick={() => setIndex(thumbIndex)}
            style={{
              outline:
                index === thumbIndex
                  ? `2px solid ${theme.colors.secondaryMain}`
                  : "",
            }}
          >
            {child}
          </Thumbnail>
        ))}
      </ThumbnailWrapper>
    </div>
  );
};

export default ResponsiveCarousel;
