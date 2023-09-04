import styled from '@emotion/styled';
// import { Unit } from "../../../../../customs/index";

export const Label = styled.div`
  height: 24px;
  width: 70px;
  padding-top: 12px;
`;

export const LabelTextWrapper = styled.div`
  color: #333333;
  font-family: 'Pretendard-Medium', Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  position: relative;
  white-space: nowrap;
`;

export const FrameText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Frame = styled.div`
  background-color: #ffbcae;
  border: 1px none;
  height: 12px;
  position: relative;
  width: 120px;
  border-radius: 50%;
`;

export const FrameFluentEmojiGreen = styled.img`
  height: 80px;
  left: 20px;
  position: absolute;
  top: 20px;
  width: 80px;
`;

export const Div = styled.div`
  width: 100%;
  /* padding: 0 320px; */
  height: 220px;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 1.5%;
  padding-left: 1%;
  padding-right: 1%;
  /* background-color: red; */
`;

export const Container = styled.div`
  /* background-color: blue; */
  padding: 0 1% 0 1%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 3%;
  height: 100%;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
  object-fit: contain;
`;

export const Text = styled.div`
  color: #333333;
  font-family: 'Pretendard-Medium', Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  position: relative;
  white-space: nowrap;
`;
