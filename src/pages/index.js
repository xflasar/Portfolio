import * as React from 'react';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import '../assets/index.scss';

export default function App () {
  return (
    <div className="App">
      <main>
        <Home />
        <div id='portal'></div>
      </main>
      <Footer />
    </div>
  );
}

export function Head () {
  return (
    <>
    <html lang='en'/>
    <meta name='theme-color' />
    <meta name='description' content='Martin Flasar - Web Developer' />
    <link rel='manifest' href='./manifest.json' />
      <title>Martin Flasar</title>
    </>
  );
}
