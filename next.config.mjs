/** @type {import('next').NextConfig} */
// import i18n from "./next-i18next.config.cjs";

import nextI18nextConfig from "./next-i18next.config.cjs";

// const nextConfig = {
//   reactStrictMode: true,
//   i18n,
// };

const nextConfig = {
  reactStrictMode: true,
  i18n: nextI18nextConfig.i18n,
};

export default nextConfig;
