import Jam from '../../../public/img/brands/jam.jpg';
import Baju from '../../../public/img/brands/baju.jpeg';
import Parfum from '../../../public/img/brands/parfum.jpg';
import Sepatu from '../../../public/img/brands/sepatu.jpeg';

interface Slide {
  image: { src: string };
  title: string;
  subtitle: string;
}

export const slides: Slide[] = [
  { image: Jam, title: 'Elegant Watches', subtitle: 'Time to Upgrade Your Style' },
  { image: Baju, title: 'Trendy Clothes', subtitle: 'Fresh Looks for Every Day' },
  { image: Parfum, title: 'Luxury Perfume', subtitle: 'Smell Like Success' },
  { image: Sepatu, title: 'Premium Shoes', subtitle: 'Walk the Talk' },
];