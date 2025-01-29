import { IProduct } from '@/Intefaces/IProduct';

const productsPreload: IProduct[] = [
  {
    id: 1,
    name: 'iPhone 16 Pro',
    price: 699,
    description:
      'Experience power and elegance with the iPhone 16 Pro: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!',
    image:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-1-202409?wid=5120&hei=2880&fmt=webp&qlt=70&.v=aWs5czA5aDFXU0FlMGFGRlpYRXk2UWFRQXQ2R0JQTk5udUZxTkR3ZVlpTEJnOG9obkp6NERCS3lnVm1tcnlVUjBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0NuWUpOMGpEMHVTZEtYYVA3c1B3UzVmbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1',
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: 'MacBook Air 16 in',
    price: 999,
    description:
      'Embrace efficiency and sophistication with the MacBook Air 16 in: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-config-202306?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1684340991333',
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: 'iPad Pro',
    price: 799,
    description:
      'Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.',
    image:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202405?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cXN0QTVTNDBtbGIzcy91THBPRThnNE5sSFgwakNWNmlhZ2d5NGpHdllWY09WV3R2ZHdZMXRzTjZIcWdMTlg4eUJQYkhSV3V1dC9oa0s5K3lqMGtUaFMvR01EVDlzK0hIS1J2bTdpY0pVeTF1Yy9kL1dQa3EzdWh4Nzk1ZnZTYWY&traceId=1',
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: 'Apple Watch Series 10',
    price: 399,
    description:
      'Stay connected and healthy with the Apple Watch Series 10: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1724620940808',
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: 'AirPods Pro (2nd generation)',
    price: 249,
    description:
      'Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725492499003',
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: 'HomePod',
    price: 99,
    description:
      'Elevate your home audio experience with the HomePod: immersive sound, intelligent assistant, and smart home hub make the HomePod the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod.',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-202210?wid=1080&hei=1080&fmt=jpeg&qlt=90&.v=1670557209908',
    categoryId: 6,
    stock: 10,
  },
];

export default productsPreload;
