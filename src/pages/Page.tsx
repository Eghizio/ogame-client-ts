import React from 'react';
// import './Page.css';
import GlobalProvider from "../providers/GlobalProvider";
import { Header, TopBar, Navigation, PlanetBar, Advertisement, Footer } from '../components';

export interface PageProps{
    children?: React.ReactNode
    style?: React.CSSProperties
}

// Page Layout
const Page: React.FC<PageProps> = ({children, style}) => {
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
                <Footer/>
            </div>
        </GlobalProvider>
    );
};

// eslint-disable-next-line
const styles = {
    page: {
        position: "fixed" as const,
        width: "100%",
        height: "100vh",
        background: "#282c34",
        color: "#61dafb",
        overflow: "auto",

        display: "flex",
        flexDirection: "column" as const,
        minHeight: "100vh"
    },
    middle: {
        display: "inline-flex",
        flex: "1 0 auto"
    },
    main: {
        width: "55vw"
    }
};

export default Page;