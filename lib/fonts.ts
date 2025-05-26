import localFont from 'next/font/local';

export const instrument_sans = localFont({
  src: [
    {
      path: '../app/fonts/instrument/InstrumentSans-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/instrument/InstrumentSans-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../app/fonts/instrument/InstrumentSans-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../app/fonts/instrument/InstrumentSans-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
  ],
  variable: '--font-instrument',
});

export const valentino = localFont({
  src: '../app/fonts/valentino/valentino.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-valentino',
});

export const libre = localFont({
  src: '../app/fonts/LibreCaslon/LibreCaslon.ttf',
  style: 'noraml',
  weight: '400',
  variable: '--font-libre',
});
