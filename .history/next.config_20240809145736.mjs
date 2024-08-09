/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['example.com'],
    },
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'en',
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
    env: {
      CUSTOM_VAR: 'value',
    },
    distDir: 'out', // This specifies the output directory for the build
  };
  
  export default nextConfig;
  