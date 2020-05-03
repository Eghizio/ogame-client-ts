import React from 'react';
// import './Page.css';
import GlobalProvider from "../providers/GlobalProvider";
import { Header, TopBar, Navigation, PlanetBar, Advertisement } from '../components';

export interface PageProps{
    children?: React.ReactNode
    style?: React.CSSProperties
}

// Page Layout
const Page: React.FC<PageProps> = ({style, children}) => {
    return (
        <GlobalProvider>
            <div style={styles.page}>
                <Header/>
                <TopBar/>
                <div style={styles.middle}>
                    <Navigation/> 
                    <main style={{...styles.main, ...style}}>
                        {children || "Empty Page"}
                    </main>
                    <PlanetBar/>
                    <Advertisement/>
                </div>
            </div>
        </GlobalProvider>
    );
};

// eslint-disable-next-line
const styles = {
    page: {
        position: "fixed" as const,
        width: "100vw",
        height: "100vh",
        background: "#282c34",
        color: "#61dafb"
    },
    middle: {
        display: "inline-flex",
    },
    main: {
        width: "60vw"
    }
};

export default Page;