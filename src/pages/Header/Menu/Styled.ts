import styled from '@emotion/styled';
// import { Unit } from "../../../customs/index";

export const HorizonLine = styled.span`
  display: block;
  height: 2px;
  border: none;
  border-radius: 6px;
  /* background: linear-gradient(
    90deg,
    rgba(13, 8, 96, 1) 0%,
    rgba(9, 9, 121, 1) 21%,
    rgba(6, 84, 170, 1) 51%,
    rgba(0, 255, 113, 1) 100%
  ); */
`;

export const MenuWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #00000026;
  border-top-style: solid;
  border-top-width: 1px;
  gap: 90px;
  height: 70px;
  /* padding-left: 320px;
  padding-right: 320px; */
  justify-content: flex-start;
  background-color: white;
  max-width: 1280px;
  margin: 0 auto;
`;

export const GnbCategory = styled.li`
  align-items: center;
  border: 1px none;
  display: inline-flex;
  gap: 12px;
  justify-content: center;
  min-width: 114px;
  position: relative;
  height: 100%;

  &:hover .test {
    display: block;
    background-color: red;
    color: red;
    background: red;
  }
  /* &:hover {
		.test {
			display: block;
			background-color: red;
		}

		span {
			color: red;
		}

		span:hover {
			border-bottom: none;
		}
	} */
`;

export const FrameMaterialSymbols = styled.img`
  height: 32px;
  position: relative;
  width: 32px;
`;

export const ThreeLine = styled.span`
  color: #333333;
  font-family: 'Pretendard-Bold', Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

export const Label = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const LabelTextWrapper = styled.div`
  color: #000000;
  font-family: 'Pretendard-Regular', Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  top: 0;
  white-space: nowrap;
`;

/// /////////////////////////////////////

export const CategoryListBox = styled.div`
  display: none;
  position: absolute;
  z-index: 301;
  left: 0;
  top: 68px;
  background-color: #f7f7f7;
  /* span {
		width: 100%;
		height: 29px;
		flex-grow: 0;
		font-family: NotoSansKR;
		font-size: 20px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: left;
		color: #000000;
		opacity: 0.5;
	} */
`;

export const CategoryList = styled.ul`
  width: auto;
  height: 700px;
  overflow-x: scroll;
  border: 1px solid #ddd;
  background: url(https://res.kurly.com/pc/service/common/1908/bg_gnb_sub_v3.png) repeat-y
    0 0;
`;

export const CategoryListItem = styled.li`
  width: 224px;
  /* height: 39px; */
  /* padding: 8px 0 0 14px; */
  cursor: pointer;

  display: flex;
  align-items: center;

  height: 56px;
  padding: 0px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  &:hover > span {
    color: #e7282a;
    opacity: 1;
    font-weight: 500;

    width: 100%;
    height: 29px;
    flex-grow: 0;
    font-family: NotoSansKR;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    opacity: 1;
  }

  & > span {
    color: #737373;
    opacity: 1;
    font-weight: 500;

    width: 100%;
    height: 29px;
    flex-grow: 0;
    font-family: NotoSansKR;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    opacity: 1;
  }

  &:hover > ul {
    display: block;
  }
`;

export const CategoryListItemIcon = styled.img`
  /* float: left;
  width: 24px;
  height: 24px; */
  /* display: none; */
  width: 56px;
  height: 56px;
  border: solid 1.5px var(--font);
  background-color: #fff;
`;

export const IconOn = styled.div`
  display: none;
  width: 42.3px;
  height: 42.3px;
  border: solid 1.5px var(--font);
  background-color: #fff;
`;

export const Span = styled.div`
  /* float: left;
  color: #333333;
  padding: 0 4px 0 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px; */
  /* 
	width: 100%;
	height: 29px;
	flex-grow: 0;
	font-family: NotoSansKR;
	font-size: 20px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: left;
	color: #000000;
	opacity: 0.5; */
`;

export const CategoryListItemSubList = styled.ul`
  display: none;
  position: absolute;
  z-index: 0;
  left: 221px;
  top: 0;
  width: 228px;
  height: 700px;
  /* padding: 11px 0 0 20px; */
  background-color: #ffffffff;
  border: 1px solid #ddd;
  border-left-width: 0;
`;

export const CategoryListItemSubListItem = styled.li`
  width: 100%;
  height: 59px;
  cursor: pointer;

  & span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 56px;

    color: #000;
    opacity: 0.55;
    font-weight: 500;

    width: 100%;

    flex-grow: 0;
    font-family: NotoSansKR;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    /* opacity: 1; */
    z-index: 11111;
    padding-left: 10px;
  }

  & span:hover {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 56px;

    color: #e7282a;

    font-weight: 500;

    width: 100%;
    padding-left: 10px;
    background-color: #f2f2f2;
    opacity: 1;

    flex-grow: 0;
    font-family: NotoSansKR;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    z-index: 11111;
  }
`;

// export const CategoryListBox = styled.div`
//   .category-list
//   .category-list-item
//   .category-list-item--sub-list
//   .category-list-item--sub-list-item
//   span {

//   width: 100%;
//   height: 29px;
//   flex-grow: 0;
//   font-family: NotoSansKR;
//   font-size: 20px;
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   text-align: left;
//   color: #000000;
//   opacity: 0.5;
// }

// .category-list-box .category-list .category-list-item:hover span {
//   color: #e7282a;
//   opacity: 1;
//   font-weight: 500;

//   width: 100%;
//   height: 29px;
//   flex-grow: 0;
//   font-family: NotoSansKR;
//   font-size: 20px;
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   text-align: left;
//   opacity: 1;
// }

// .category-list-box
//   .category-list
//   .category-list-item:hover
//   .category-list-item--sub-list {
//   display: block;
// }
