// app/layout.tsx
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>YumReview</title>
      </head>
      <body>
        {children} {/* This renders the content of your page */}
      </body>
    </html>
  );
}
