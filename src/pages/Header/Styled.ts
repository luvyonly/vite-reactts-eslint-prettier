import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// import { Unit } from "../../customs/index";

export const Container = styled.div`
  padding-top: 200px;
`;

export const TestWrap = styled.div`
  /* flex: 1; */
  /* display: inline-flex;
  width: 100%;
  justify-content: "space-between";
  background-color: red; */
  height: 106px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Test = styled.div`
  align-items: stretch;
  flex-direction: row;
  flex: 1;
  width: 100%;

  display: inline-flex;
  gap: 40px;
  /* position: relative; */
  /* background-color: gray; */
  justify-content: 'space-between';
`;

export const StyledPropsTest = styled.div`
  width: 120px;
  height: 40px;
  font-size: 25px;
  color: white;
`;

export const Nav_li = styled.li`
  &:active {
    background-color: red;
  }

  &:hover {
    background-color: #111;
  }

  /* textDecoration : none; */
  // (props) => (props. ? "blue" : "red")
`;

export const Nav_Link = styled(Link)<{ active_line: string }>`
  color: inherit;
  text-decoration: ${(props) =>
    props.active_line === 'underline' ? 'underline' : 'none'};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0.25rem;
`;

export const Nav_ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const Nav = styled.nav`
  background-color: #fff;
  color: white;
  /* display: flex; */
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 0 320px; */
`;

export const SiteTitle = styled.div`
  font-size: 2rem;
`;
