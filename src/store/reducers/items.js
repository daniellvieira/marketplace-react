import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import virtualAssistant from 'assets/items/assistente-virtual.png';
import airpod from 'assets/items/airpod.png';
import virtualAssistantScreen from 'assets/items/assistente-virtual-tela.png';
import bookReader from 'assets/items/leitor-livros.png';
import seatCushion from 'assets/items/assento.png';
import leatherSteeringCover from 'assets/items/capa-volante-couro.png';
import sideOrganizer from 'assets/items/organizador-lateral.png';
import crystalSteeringCover from 'assets/items/capa-volante-cristais.png';
import vehicleHolder from 'assets/items/suporte-veicular.png';
import console1 from 'assets/items/console-1.png';
import game1 from 'assets/items/jogo-1.png';
import console2 from 'assets/items/console-2.png';
import joystick from 'assets/items/manete.png';
import game2 from 'assets/items/jogo-2.png';
import deskOrganizer from 'assets/items/guarda-treco.png';
import notebook from 'assets/items/caderno.png';
import chair from 'assets/items/cadeira.png';
import folderOrganizer from 'assets/items/organizador-pastas.png';
import paper from 'assets/items/papel.png';
import tv50 from 'assets/items/tv-50.png';
import tv60 from 'assets/items/tv-60.png';
import soundBox from 'assets/items/caixa-som.png';
import bluetoothSoundBox from 'assets/items/caixa-som-bluetooth.png';
import miniSystem from 'assets/items/mini-system.png';
import tablet from 'assets/items/tablet.png';

const INITIAL_STATE = [
  {
    title: 'Virtual Assistant',
    description:
      'Discover our best-selling smart speaker, now even better. The new front-directed audio design (1.6" speaker) ensures more bass and a complete sound.',
    photo: virtualAssistant,
    favorite: false,
    price: 285,
    id: uuid(),
    category: 'electronics',
  },
  {
    title: 'AirPods with Charging Case',
    description:
      'AirPods automatically connect and are always on. They know when they are in your ears and pause when removed. Adjust the volume, switch songs, make a call.',
    photo: airpod,
    favorite: false,
    price: 900,
    id: uuid(),
    category: 'electronics',
  },
  {
    title: 'Wi-Fi Tablet',
    description:
      'With the A12Z Bionic chip, the new Pro Tablet ensures greater fluidity in daily tasks, work, and more. Edit 4K videos, create 3D objects, and use augmented reality naturally and instantly.',
    photo: tablet,
    favorite: false,
    price: 637,
    id: uuid(),
    category: 'electronics',
  },
  {
    title: 'Virtual Assistant with Screen',
    description:
      'Designed to move with you: with a 10.1" HD display that moves automatically, video calls, recipes, movies, and series will always be in view. The speakers offer premium, high-quality directional sound.',
    photo: virtualAssistantScreen,
    favorite: false,
    price: 1600,
    id: uuid(),
    category: 'electronics',
  },
  {
    title: 'E-Book Reader',
    description:
      'The e-book reader with the largest and best resolution - 7" 300 ppi Paperwhite display. Read like it’s on paper, without glare, even in sunlight.',
    photo: bookReader,
    favorite: false,
    price: 447,
    id: uuid(),
    category: 'electronics',
  },
  {
    title: 'Seat Cushion',
    description:
      'Made of leather material, comfortable and soft. Natural environmental leather gives a delicate feeling. Suitable for year-round use. With the functions of heating and ventilation, the car seat can be used normally.',
    photo: seatCushion,
    favorite: false,
    price: 45.9,
    id: uuid(),
    category: 'automotive',
  },
  {
    title: 'Leather Steering Wheel Cover',
    description:
      'This steering wheel cover is made of synthetic leather, non-slip, breathable. 100% ODORLESS: healthy and eco-friendly elastic, non-toxic, durable. Better grip on the steering wheel provides a great and comfortable driving experience.',
    photo: leatherSteeringCover,
    favorite: false,
    price: 150,
    id: uuid(),
    category: 'automotive',
  },
  {
    title: 'Side Organizer',
    description:
      'Increase more space and ensure safety – all drivers know it’s very dangerous for our phone to fall into the gap between the front seat and the side of the console while driving, this car seat gap filler creates extra storage for you to prevent dangerous things from happening, it can store things like smartphones, wallets, ensuring safe driving.',
    photo: sideOrganizer,
    favorite: false,
    price: 149.9,
    id: uuid(),
    category: 'automotive',
  },
  {
    title: 'Crystal Steering Wheel Cover',
    description:
      'Crystal steering wheel cover material: High-quality leather and diamond craftsmanship: more stable compared to other similar products, and does not hurt your hands. This shiny steering wheel cover for women and girls is universal for steering wheels with a diameter of 37-38 cm/14.5-15 inches.',
    photo: crystalSteeringCover,
    favorite: false,
    price: 290,
    id: uuid(),
    category: 'automotive',
  },
  {
    title: 'Vehicle Holder',
    description:
      'With the i2GO PRO 3-in-1 Magnetic Vehicle Holder, you can position your Smartphone of any size and other devices wherever you want easily and securely. Ideal for using GPS apps, controlling music in the car, watching movies and series at home, making video calls, and checking documents and messages at the office.',
    photo: vehicleHolder,
    favorite: false,
    price: 59.9,
    id: uuid(),
    category: 'automotive',
  },
  {
    title: 'Console',
    description:
      'The pre-order console offers new gameplay possibilities you never imagined. Additionally, you can also download digital games. Experience ultra-fast loading with the 825GB SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D audio.',
    photo: console1,
    favorite: false,
    price: 4300,
    id: uuid(),
    category: 'games',
  },
  {
    title: 'Console Game',
    description:
      'Embark on an epic and moving journey and fight against those who defy destiny. The prophecy calls for knowledge to help understand it and the role you will play. You must decide whether to be chained by the fear of repeating mistakes or to break free from your past to be the father you need to be.',
    photo: game1,
    favorite: false,
    price: 299.9,
    id: uuid(),
    category: 'games',
  },
  {
    title: 'Console',
    description:
      'The smallest and sleekest of all time. With higher frame rates, faster load times, and richer, more dynamic worlds, it offers next-generation performance and speed in a compact, all-digital format. It also has the best services for all types of players.',
    photo: console2,
    favorite: false,
    price: 4349,
    id: uuid(),
    category: 'games',
  },
  {
    title: 'Wireless Joystick Controller',
    description:
      'This controller combines revolutionary functions, preserving precision, comfort, and accuracy in every movement. Thanks to its ergonomically designed hand position, you can play for hours with total comfort.',
    photo: joystick,
    favorite: false,
    price: 279,
    id: uuid(),
    category: 'games',
  },
  {
    title: 'Console Game',
    description:
      'In his newest adventure, a teenager is adjusting to his new home, but when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power must come great responsibility. To save all of New York, he must take on the mantle of hero.',
    photo: game2,
    favorite: false,
    price: 349.9,
    id: uuid(),
    category: 'games',
  },
  {
    title: 'Desk Organizer',
    description:
      'Modern, functional, and versatile with high-quality plastic finish and robust construction that adapts to any environment. (5 compartments and 1 rear divider). Keep everything clean and organized on your workspace, like pens, pencils, scissors, clips, sticky notes, accessories, and more to save space with style.',
    photo: deskOrganizer,
    favorite: false,
    price: 19.9,
    id: uuid(),
    category: 'office',
  },
  {
    title: 'Smart Notebook',
    description:
      'Smart notebook with calendar, pen elastic, and dividers. Format: 215 x 280 mm (L x H) with 60 lined sheets and 20 plain white sheets of 90 grams that you can remove and add whenever you want. Manufactured with great care and attention to detail.',
    photo: notebook,
    favorite: false,
    price: 285,
    id: uuid(),
    category: 'office',
  },
  {
    title: 'Office Chair',
    description:
      '360º polypropylene swivel base with 5 castors; Gas height adjustment; Backrest with wooden structure and PU leather upholstery; Seat with multi-layered wood and PU leather upholstery; Polypropylene arms with PU leather upholstery; Foam with controlled density.',
    photo: chair,
    favorite: false,
    price: 629,
    id: uuid(),
    category: 'office',
  },
  {
    title: 'A4 Paper 75g 500 sheets',
    description:
      'Developed for school and professional activities, perfect cut and balanced absorption, allowing better paper sliding in the printer. Produced with 100% renewable eucalyptus and the fibers are treated to achieve the highest degree of whiteness. Chamex guarantees excellent performance in high-speed equipment and printers, with 99% no paper jams in your printer.',
    photo: paper,
    favorite: false,
    price: 27.6,
    id: uuid(),
    category: 'office',
  },
  {
    title: 'Narrow File with Holes',
    description:
      'Ideal for organizing folders and papers. Organize your documents and hanging folders in one place, saving drawer space. It has slots to accommodate folders without bending. Contains holes for ventilation and a unique design. Organizes and beautifies your space.',
    photo: folderOrganizer,
    favorite: false,
    price: 44.9,
    id: uuid(),
    category: 'office',
  },
  {
    title: '50" Smart TV',
    description:
      'The 50" LED Smart TV is equipped with Business TV technology that allows you to configure the TV for both residential and hotel mode, bringing a greater variety of settings and customizations to your TV. Additionally, it offers excellent 4K image quality.',
    photo: tv50,
    favorite: false,
    price: 2600,
    id: uuid(),
    category: 'sound',
  },
  {
    title: '60" 4K UHD Smart TV',
    description:
      '60" 4K UHD LG Smart TV with Wi-Fi, Bluetooth, Artificial Intelligence, Control Panel, Natural Language Processing, AI Recommendation, Game Optimizer, Channels, Smart App Editing, and Media Player.',
    photo: tv60,
    favorite: false,
    price: 3359,
    id: uuid(),
    category: 'sound',
  },
  {
    title: 'Sound Box',
    description:
      'The 710 splash-proof sound box transforms your next event into a real party, show, or club. Unique and colorful light show synchronized with your mobile device. Minimalist and intuitive buttons on the top panel and the app allow you to create high-level musical and visual experiences. With customizable strobe lights and the incredible sound of the dual tweeter and rich bass woofers set.',
    photo: soundBox,
    favorite: false,
    price: 5817.33,
    id: uuid(),
    category: 'sound',
  },
  {
    title: 'Bluetooth Sound Box',
    description:
      'The sound box offers bold sound with an optimized long-excursion driver, separate tweeter, and two bass radiators. Up to 20 hours of playback and a handy power bank to keep the devices that make the party going all night long.',
    photo: bluetoothSoundBox,
    favorite: false,
    price: 1199,
    id: uuid(),
    category: 'sound',
  },
  {
    title: 'Mini System with Karaoke Function',
    description:
      'Modern and super powerful, the Mini System will play your music with maximum quality in various formats, such as MP3, WMA CD, CD-R, and CD-RW. And if the idea is to host lively parties and gatherings, the karaoke function, Bluetooth connection, and two USB ports will be very useful.',
    photo: miniSystem,
    favorite: false,
    price: 782.91,
    id: uuid(),
    category: 'sound',
  },
];

export const itemsSlice = createSlice({
  name: 'items',
  initialState: INITIAL_STATE,
  reducers: {
    changeWishList: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) item.favorite = !item.favorite;
        return item;
      });
    },
    createItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    changeItem: (state, { payload }) => {
      // https://immerjs.github.io/immer/update-patterns/#array-mutations
      const index = state.findIndex((item) => item.id === payload.id);
      if (index !== -1) Object.assign(state[index], payload.item);
    },
  },
});

export const { changeWishList, createItem, changeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
