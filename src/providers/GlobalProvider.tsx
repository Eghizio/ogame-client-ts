import React, { createContext } from "react";

const GlobalContext = createContext(null);

export interface GlobalProviderProps{
    children: any
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({children}) => {
    // eslint-disable-next-line
    const data = {
        cdn: {
            officers: "https://gf3.geo.gfsrv.net/cdne7/5cc4cca6a362b93d874107caabf3b4.png",
            resources: "https://gf3.geo.gfsrv.net/cdnbb/a9fe14ed992de9b7f40d22213a475e.png",
            antimatter: "https://gf1.geo.gfsrv.net/cdnc5/401d1a91ff40dc7c8acfa4377d3d65.gif",
            classes: {
                miner: "https://gf3.geo.gfsrv.net/cdn87/ebadb2179a145168f234a9287786c1.png",
                warrior: "",
                explorer: ""
            },
            adviceNotification: "https://gf3.geo.gfsrv.net/cdne4/d386882e5c67089b9b61de50acf88d.gif"
        }
    };


    return (
        <GlobalContext.Provider value={null}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;