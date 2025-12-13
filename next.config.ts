import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // полностью статический экспорт
  images: {
    unoptimized: true, // отключаем оптимизацию изображений
  },
};

export default nextConfig;
