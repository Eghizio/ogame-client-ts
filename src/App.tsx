import React from 'react';
import "./App.css";
import GlobalProvider from "./providers/GlobalProvider";
import Header from './components/Header/Header';
import { TopTab } from './components/TopTab';
import { Navigation } from "./components/Navigation";
import { PlanetTab } from "./components/PlanetTab";
import Advertisment, { AdvertismentProps } from './components/Advertisment';


export interface AppProps{
  page: React.FC;
};

const addData: AdvertismentProps = {
  // bannerURL: "https://aimint.org/kr/wp-content/uploads/sites/20/2016/04/image-placeholder-vertical.jpg",
  bannerURL: "https://gf3.geo.gfsrv.net/cdn86/bd3c2840dbf30b81ea8f96e4dcfadc.jpg",
  // bannerURL: "https://gf1.geo.gfsrv.net/cdn3f/af316617574e981d0771fe9feefb48.jpg",
  href: "/"
}

//can be login page and then redirect to overview or error on login
const App: React.FC<AppProps> = ({page}) => {
  const Page = page;

  return(
    <GlobalProvider>
      <div className="app-main">
        <Header/>
        <TopTab/>
        <div style={css.wrapper}>
          <Navigation/> 
          <main style={css.page}>
            <Page/>
          </main>
          <PlanetTab/>
          <Advertisment bannerURL={addData.bannerURL} href={addData.href}/>
        </div>
      </div>
    </GlobalProvider>
  );
};

const css = {
  wrapper: {
    display: "inline-flex",
  },
  page: {
    width: "60vw"
  }
};

export default App;