import {
  pipeImages,
  cigarImages,
  tobaccoImages,
  accessoryImages,
} from '@data/gallery-images';

const productPages = [
  {
    slug: 'pipes',
    title: 'Pipes',
    text: 'Elevate your smoking experience with our curated selection of premium pipes. From classic designs to bold, modern styles, each piece is crafted to perfection, blending artistry, comfort, and tradition. Whether you’re a seasoned connoisseur or just beginning your journey, our diverse collection offers a pipe to suit every taste and occasion.',
    galleryImages: pipeImages,
  },
  {
    slug: 'cigars',
    title: 'Cigars',
    text: 'Experience the rich, nuanced flavors of our carefully curated cigar collection. From rare, hand-rolled classics to bold modern blends, each cigar embodies craftsmanship, tradition, and sophistication. Explore California’s largest selection and discover the perfect cigar to elevate any moment. Every cigar in our collection is chosen for its exceptional quality, offering a truly unparalleled smoking experience.',
    galleryImages: cigarImages,
  },
  {
    slug: 'tobacco',
    title: 'Tobacco',
    text: 'We offer only the highest quality cigarettes, pipe tobacco, and related tobacco products, carefully selected for discerning tastes. Each product in our collection reflects craftsmanship and consistency, ensuring a superior smoking experience every time. Explore a range that combines tradition, quality, and sophistication.',
    galleryImages: tobaccoImages,
  },
  {
    slug: 'accessories',
    title: 'Accessories',
    text: 'Complement your smoking experience with our curated selection of premium accessories. From elegant humidors and precision cutters to handcrafted lighters and stylish cases, each piece is designed for both function and sophistication. Discover tools that enhance every ritual and reflect the art of fine tobacco.',
    galleryImages: accessoryImages,
  },
];

export { productPages };
