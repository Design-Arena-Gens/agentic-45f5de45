import './globals.css';

export const metadata = {
  title: 'Million-Dollar Solo Startup Ideas',
  description: 'Curated unique solo-founder ideas for ambitious teens',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1>Million-Dollar Solo Startup Ideas</h1>
            <p className="tagline">Unique, low-saturation ideas you can build alone</p>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>Built for teen founders. Ship fast. Own the niche.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
