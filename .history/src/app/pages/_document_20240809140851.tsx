// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { metadata } from '@/app/Metadata';  // Update the path as necessary

class MyDocument extends Document {
  render() {
    const renderIcons = () => {
      return Object.entries(metadata.icons).map(([key, href], index) => (
        <link key={index} rel="icon" sizes={key === 'apple' ? '180x180' : undefined} href={href} />
      ));
    };

    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {renderIcons()}
          <link rel="manifest" href={metadata.manifest} />
          {metadata.fonts.map((font, index) => (
            <link key={index} href={font} rel="stylesheet" />
          ))}
        </Head>
        <body className="font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
