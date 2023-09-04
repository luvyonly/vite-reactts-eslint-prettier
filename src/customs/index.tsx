const FLAG = 1920;
const FLAG2 = 750;
export const MAX_IPAD = `${1024}px`;

export const Colors = {
  active: '#8970e1',
  activeGradient: '#91a0e5',
  lightGray: '#bbbbba',
  gray: '#a5a5a5',
  darkGray: '#221e1f',
  labelColor: '#58595b',
  veryLightGray: '#a7a7a7',
  g7: '#777',
};

export const ErrorMessage = (error: never) => {
  console.log(error);
  alert('네트워크 오류 발생! 다시 시도해주세요');
};

export const Comma = (number: number | bigint) => {
  return new Intl.NumberFormat().format(number);
};

export const Ratio = (px: number) => {
  return (px / FLAG) * 100;
};

export const Unit = (px: number) => {
  return `${(px / FLAG) * 100}vw`;
};

export const MobileUnit = (px: number) => {
  return `${(px / FLAG2) * 100}vw`;
};

export const MobileRatio = (px: number) => {
  return (px / FLAG2) * 100;
};

export const Menus = [
  { id: 1, name: '홈 iot', icon: 'iot', regular: true },
  { id: 2, name: '온열용품', icon: 'thermal', regular: true },
  { id: 3, name: '캠핑용', icon: 'camping', regular: true },
  { id: 4, name: '안마기', icon: 'massage', regular: true },
  { id: 5, name: '살균', icon: 'sterilization', regular: true },
  { id: 6, name: '전기차용품', icon: 'electronic', regular: true },
  { id: 7, name: '애견용품', icon: 'pat', regular: true },
  { id: 8, name: '더보기', icon: 'iot', regular: false },
];

export const config = {
  spaceBetween: 0,
  slidesPerView: 'auto',
  // freeMode: true,
  simulateTouch: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  speed: 1000,
};

export const regExp = {
  email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,16}$/,
  engNumber: /^[a-zA-Z0-9]*$/,
  onlyNumber: /^[0-9]*$/,
};

export const TelList = [
  '02',
  '031',
  '032',
  '033',
  '041',
  '042',
  '043',
  '044',
  '051',
  '052',
  '053',
  '054',
  '055',
  '061',
  '062',
  '063',
  '064',
  '070',
];

export const PhoneList = ['010', '011', '016', '017', '018', '019'];

export const EmailList = ['google.com', 'naver.com', 'nate.com', 'daum.net'];

const telRegExp = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/;

export const transTel = (num: string) => {
  return num.replace(telRegExp, '$1-$2-$3');
};
