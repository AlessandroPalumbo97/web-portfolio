import nervousCard from '@/assets/images/cards/nervousCardx2.png';
// import nervousLink from '@/assets/compressed/nervous_fighter.zip';

import auroraCard from '@/assets/images/cards/auroraCardx2.png';

import printCard from '@/assets/images/cards/printCardx2.png';

export const CARD_ITEMS = [
  {
    id: 0,
    title: 'Nervous Fighter!',
    subTitle: 'My BETA version of a stickman fighter',
    imgSrc: nervousCard,
    link: '',
    selected: false,
    downloadable: true,
  },
  {
    id: 1,
    title: 'Aurora',
    subTitle: '3D printed robot dog!',
    imgSrc: auroraCard,
    link: '/projects/aurora',
    selected: false,
    downloadable: false,
  },
  {
    id: 2,
    title: 'Printed is better',
    subTitle: '3D print is amazing, check it out!',
    imgSrc: printCard,
    link: '/projects/3Dprint',
    selected: false,
    downloadable: false,
  },
];
