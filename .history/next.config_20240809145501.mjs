/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Helps in identifying potential problems in your application
    swcMinify: true,        // Enables SWC-based minification for faster builds
    images: {
      domains: ['example.com'], // Add the domains that you want to allow for images
    },
    i18n: {
      locales: ['en', 'es'],   // Example of internationalization with English and Spanish locales
      defaultLocale: 'en',
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,       // Adds support for importing SVG files as React components
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
    env: {
      CUSTOM_VAR: 'value',   // Add environment variables for client-side usage
    },
  };
  
  export default nextConfig;
  