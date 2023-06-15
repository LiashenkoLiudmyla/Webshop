import all from '../assets/filters/all.png';
import burger from '../assets/filters/burger.png';
import pizza from '../assets/filters/pizza.png';
import salads from '../assets/filters/salads.png';
import donut from '../assets/filters/donut.png';
import drinks from '../assets/filters/drinks.png';



const filtersList = [
  {
    id: 1,
    title: 'All',
    image: all,
    type: '',
  },
  {
    id: 2,
    title: 'Burger',
    image: burger,
    type: 'burger',
  },
  {
    id: 3,
    title: 'Pizza',
    image: pizza,
    type: 'pizza',
  },
  {
    id: 4,
    title: 'Salads',
    image: salads,
    type: 'salad',
  },
  {
    id: 5,
    title: 'Donut',
    image: donut,
    type: 'donut',
  },
  {
    id: 6,
    title: 'Drinks',
    image: drinks,
    type: 'drink',
  },
];

export default filtersList;