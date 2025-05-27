import localFont from 'next/font/local';

export const libre = localFont({
  src: '../app/fonts/LibreCaslon/LibreCaslon.ttf',
  style: 'noraml',
  weight: '400',
  variable: '--font-libre',
});

export const intrepid = localFont({
  src: '../app/fonts/intrepid/Intrepid.ttf',
  style: 'noraml',
  weight: '400',
  variable: '--font-intrepid',
});

export const poiret_one = localFont({
  src: '../app/fonts/PoiretOne/PoiretOne.ttf',
  style: 'normal',
  weight: '400',
  variable: '--font-poiret',
});
