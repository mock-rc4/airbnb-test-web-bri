import React from "react";
import styled from "styled-components";
import { flexCenter } from "./styled";

const Pagination = ({ total, limit, page, setPage }) => {
  //props: total(총 게시물 수), limit(페이지당 게시물 수), page(현재 페이지 번호)

  const numPages = Math.ceil(total / limit);
  return (
    <NavStyle>
      <button
        className="before-btn"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className="current-btn"
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button
        className="after-btn"
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </button>
    </NavStyle>
  );
};

export default Pagination;

const NavStyle = styled.nav`
  ${flexCenter}
  margin-top: 5rem;
  margin-bottom: 2rem;

  button {
    border: none;
    border-radius: 50%;
    padding: 1rem 1.4rem;
    background: white;
    font-size: 1.4rem;
    font-weight: 500;
    color: black;
    margin: 0 0.3rem;
    &:hover {
      background: rgb(240, 240, 240);
      cursor: pointer;
    }

    &[aria-current] {
      background: black;
      color: white;
      font-weight: bold;
      cursor: revert;
      transform: revert;
    }
  }
`;
