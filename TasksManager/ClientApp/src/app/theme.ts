const primary =  '#50CA7C';
const success =  '#90BA14';
const info =  '#1480FC';
const warning =  '#FCB91B';
const danger =  '#FF4F92';

export const DARK_THEME = {
  name: 'dark',
  base: 'dark',
  variables: {
    primary,
    success,
    info,
    warning,
    danger,
    charts: {
      primary,
      success,
      info,
      warning,
      danger,
      bg: 'transparent',
      textColor: '#FFFFFF',
      axisLineColor: '#8F9BB3',
      splitLineColor: '#2E3A59',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#101426',
      areaOpacity: '0.7',
    },
    bubbleMap: {
      primary,
      success,
      info,
      warning,
      danger,
      titleColor: '#FFFFFF',
      areaColor: '#2E3A59',
      areaHoverColor: '#8F9BB3',
      areaBorderColor: '#1A2138',
    },
  },
};
