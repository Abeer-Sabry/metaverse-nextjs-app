import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
