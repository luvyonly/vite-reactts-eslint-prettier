import styled from '@emotion/styled';
// import { Unit } from "../../../customs/index";

export const Frame = styled.div`
  align-items: center;
  border: 1px none;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  position: relative;
`;

export const FramePrimeClock = styled.img`
  height: 32px;
  position: relative;
  width: 32px;
`;

export const FrameTextWrapper = styled.div`
  color: #000000;
  font-family: 'Pretendard-Regular', Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;
