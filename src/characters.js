// @flow
import BRONN from './assets/sigils/Bronn.svg';
import BUTTERFLY from './assets/sigils/Missandei.svg';
import CLEGANE from './assets/sigils/House-Clegane-Main-Shield.PNG.png';
import DONDARRION from './assets/sigils/House-Dondarrion-Main-Shield.PNG.png';
import FREE_FOLK from './assets/sigils/Free-Folk-Main-Shield.PNG.png';
import GENTRY from './assets/sigils/hammer_and_anvil.svg';
import GREY_JOY from './assets/sigils/House-Greyjoy-Main-Shield.PNG.png';
import HEART from './assets/sigils/FieryHeartoftheLordofLight.png';
import LANNISTER from './assets/sigils/House-Lannister-Main-Shield.PNG.png';
import MORMONT from './assets/sigils/House-Mormont-Main-Shield.png';
import NIGHT_KING from './assets/sigils/night-king.svg';
import PAYNE from './assets/sigils/House-Payne-Main-Shield.PNG.png';
import SEAWORTH from './assets/sigils/House-Seaworth-Shield.PNG.png';
import SPIDER from './assets/sigils/Spider-Man_2002_Front_Spider_Symbol.svg';
import STARK from './assets/sigils/House-Stark-Main-Shield.PNG.png';
import TARGARYAN from './assets/sigils/House-Targaryen-Main-Shield.PNG.png';
import TARLY from './assets/sigils/House-Tarly-Main-Shield.PNG.png';
import TARTH from './assets/sigils/House-Tarth-Main-Shield.PNG.png';
import UNSULLIED from './assets/sigils/unsullied.png';

export type CharacterType = {|
  img: string,
  name: string,
|};

const CHARACTERS: CharacterType[] = [
  {
    img: TARGARYAN,
    name: 'Jon Snow',
  },
  {
    img: STARK,
    name: 'Arya Stark',
  },
  {
    img: STARK,
    name: 'Sansa Stark',
  },
  {
    img: STARK,
    name: 'Bran Stark',
  },
  {
    img: TARGARYAN,
    name: 'Daenerys Targaryen',
  },
  {
    img: LANNISTER,
    name: 'Cersei Lannister',
  },
  {
    img: LANNISTER,
    name: 'Jaime Lannister',
  },
  {
    img: LANNISTER,
    name: 'Tyrion Lannister',
  },
  {
    img: TARTH,
    name: 'Brienne of Tarth',
  },
  {
    img: HEART,
    name: 'Melisandre',
  },
  {
    img: SPIDER,
    name: 'Varys',
  },
  {
    img: SEAWORTH,
    name: 'Davos Seaworth',
  },
  {
    img: GENTRY,
    name: 'Gendry',
  },
  {
    img: TARLY,
    name: 'Sammwell Tarly',
  },
  {
    img: FREE_FOLK,
    name: 'Gilly',
  },
  {
    img: STARK,
    name: 'Ghost (Direwolf)',
  },
  {
    img: STARK,
    name: 'Nymeria (Direwolf)',
  },
  {
    img: TARGARYAN,
    name: 'Drogon (Dragon)',
  },
  {
    img: TARGARYAN,
    name: 'Rhaegal (Dragon)',
  },
  {
    img: MORMONT,
    name: 'Lyanna Mormont',
  },
  // {
  // name: 'Qyburn',
  // img: '',
  // },
  {
    img: CLEGANE,
    name: 'Gregor Clegane (The Mountain)',
  },
  {
    img: CLEGANE,
    name: 'Sandor Clegane (The Hound)',
  },
  {
    img: GREY_JOY,
    name: 'Theon Greyjoy',
  },
  {
    img: MORMONT,
    name: 'Jorah Mormont',
  },
  {
    img: BRONN,
    name: 'Bronn',
  },
  {
    img: UNSULLIED,
    name: 'Grey Worm',
  },
  {
    img: BUTTERFLY,
    name: 'Missandei',
  },
  {
    img: DONDARRION,
    name: 'Berric Dondarrion',
  },
  {
    img: GREY_JOY,
    name: 'Euron Greyjoy',
  },
  {
    img: PAYNE,
    name: 'Poderick Payne',
  },
  {
    img: FREE_FOLK,
    name: 'Tormund Giantsbane',
  },
  {
    img: GREY_JOY,
    name: 'Yara Greyjoy',
  },
  // {
  // img: '',
  // name: 'Hot Pie',
  // },
  {
    img: NIGHT_KING,
    name: 'The Night King',
  },
];

export default CHARACTERS;
