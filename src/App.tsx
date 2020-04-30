import React from 'react';
import "./App.css";
import GlobalProvider from "./providers/GlobalProvider";
import { Header, TopBar, Navigation, PlanetBar, Advertisement } from './components';


export interface AppProps{
  page: React.FC;
};

const App: React.FC<AppProps> = ({page}) => {
  const Page = page;

  return(
    <GlobalProvider>
      <div className="app-main">
        <Header/>
        <TopBar/>
        <div style={styles.wrapper}>
          <Navigation/> 
          <main style={styles.page}>
            <Page/>
          </main>
          <PlanetBar/>
          <Advertisement/>
        </div>
      </div>
    </GlobalProvider>
  );
};

const styles = {
  wrapper: {
    display: "inline-flex",
  },
  page: {
    width: "60vw"
  }
};

export default App;