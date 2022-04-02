import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { flexCenter, color, deviceSize } from "../styled";

const SearchText = ({ isfix }) => {
  const isOpen = useSelector((state) => state.openSearchBarReducer);

  return (
    <SearchBoxTextStyle isfix={isfix} isopen={isOpen.isOpen}>
      <li>숙소</li>
      <li>체험</li>
      <li>온라인 체험</li>
    </SearchBoxTextStyle>
  );
};

export default SearchText;

const SearchBoxTextStyle = styled.ul`
  ${flexCenter}
  color: ${(props) => (props.isfix ? `${color.black}` : "white")};
  font-size: 16px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  background:${(props) => (props.isfix ? "white" : `${color.black}`)};
  padding:0 5.5rem;
  opacity: ${(props) => (props.isopen ? "1" : "0")};
  pointer-events: ${(props) => (props.isopen ? "" : "none")};

  li {
    padding: 3.5rem 2rem;
    cursor: pointer;
    }
  }

  @media ${deviceSize.tablet}{
    top:5rem;
  }
  @media ${deviceSize.mobile} {
    display: none;
  }
`;
