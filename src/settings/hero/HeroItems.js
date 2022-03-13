import React from 'react';
import { Link } from 'umi';
import me from '@/assets/images/me.jpg';

export const HERO_ITEMS = {
  home: {
    title: 'Alessandro Palumbo',
    subTitle: 'I like to call myself a "nerd", but i have many habits 🤪',
    text: <Link to="/about">read more...</Link>,
  },
  aurora: {
    title: 'Aurora',
    subTitle: 'Aurora is a robotic dog, thought and originated from scratch',
  },
  about: {
    title: 'About Me',
    subTitle: 'Hi there!',
    photo: me,
  },
  salvinification: {
    title: 'Salvinification',
    subTitle: "Have fun changing our favorite superhero's dresses",
    text: 'lorem ipsum dolor sit amet',
  },
};
