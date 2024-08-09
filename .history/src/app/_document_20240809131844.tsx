// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { metadata } from '../src/app/Metadata';  // Adjust the import path as necessary

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords.join(", ")} />
          <meta name="author" content={metadata.author} />
          <title>{metadata.title}</title>

          {/* Icons */}
          <link rel="icon" href={metadata.icons.favicon} type="image/x-icon" />
          <link rel="shortcut icon" href={metadata.icons.shortcut} type="image/png" />
          <link rel="apple-touch-icon" href={metadata.icons.apple} sizes="180x180" type="image/png" />
          <link rel="icon" href={metadata.icons.android192} sizes="192x192" type="image/png" />
          <link rel="icon" href={metadata.icons.android512} sizes="512x512" type="image/png" />
          <link rel="manifest" href={metadata.manifest} />

          {/* Fonts */}
          {metadata.fonts.map((font, index) => (
            <link key={index} href={font} rel="stylesheet" />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
