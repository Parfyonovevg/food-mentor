import loseWeightPic from '../assets/images/goals/image1.png';
import gainMusclePic from '../assets/images/goals/image2.png';
import developHealthyHabitsPic from '../assets/images/goals/image3.png';
import developHealthyHabitsPic2 from '../assets/images/goals/image4.png';
import moonIcon from '../assets/images/icons/moon.png';
import donutIcon from '../assets/images/icons/donut.png';
import sodaIcon from '../assets/images/icons/soda.png';
import saltIcon from '../assets/images/icons/salt.png';
import pizzaIcon from '../assets/images/icons/pizza.png';
import crossIcon from '../assets/images/icons/cross.png';

export const PATHS = [
  '/',
  '/goal',
  '/measure',
  '/destructive-behavior',
  '/physical-exercise',
];

export const GOALS = [
  {
    title: 'Loose Weight',
    img: loseWeightPic,
  },
  {
    title: 'Gain Muscle',
    img: gainMusclePic,
  },
  {
    title: 'Develop Healthy Habits',
    img: developHealthyHabitsPic,
  },
  {
    title: 'Develop Healthy Habits',
    img: developHealthyHabitsPic2,
  },
];

export const MEASURES = ['Metric', 'Imperial'];
export const DESTRUCTIVE_BEHAVIORS = [
  {
    title: `I don't rest enough`,
    img: moonIcon,
  },
  {
    title: `I have a sweet tooth`,
    img: donutIcon,
  },
  {
    title: `I have to much soda`,
    img: sodaIcon,
  },
  {
    title: `I eat many salty food`,
    img: saltIcon,
  },
  {
    title: `I enjoy midnight snacks`,
    img: pizzaIcon,
  },
  {
    title: `None of the above`,
    img: crossIcon,
  },
];

export const PHYSICAL_EXERCISES = [
  'Hardly at all',
  'Fitness 1-2 times a week',
  'Fitness 3-5 times a week',
  'Fitness 5-7 times a week',
];
