import React, { createContext } from "react";
import Global from "../types/global";


const GlobalContext = createContext<Global.State|null>(null);

export interface GlobalProviderProps{
    children: React.ReactNode
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({children}) => {
    // Simulates fetched data or assets from API or CDN
    // might move some of the properties into the Components or CSS
    const data: Global.State = initializeGlobalState();

    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;

export { GlobalContext };


const mapLargeSprites = (ids: Global.ID[], initialY = "0px") => {
    const spriteSheet = "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg";
    let x = 0;
    let y = initialY;
    const width = 200;
    const height = 200;

    const spriteMap = new Map<string, Global.Sprite>();

    // it is blocking tho, setTimeout zero ?, promises?
    ids.forEach((id, i) => {
        x = width * -i;

        const sprite: Global.Sprite = {
            src: spriteSheet,
            position: `${x}px ${y}`,
            width: `${width}px`,
            height: `${height}px`
        };

        spriteMap.set(id, sprite);
    });

    return spriteMap;
};

const initializeGlobalState = () => {
    //IDs were grouped from my api 
    const buildingsIDs: Global.ID[] = ["1", "2", "3", "4", "12", "14", "15", "21", "22", "23", "24", "31", "33", "34", "36", "41", "42", "43", "44"];
    const researchIDs: Global.ID[] = ["106", "108", "109", "110", "111", "113", "114", "115", "117", "118", "120", "121", "122", "123", "124", "199"];
    const shipsIDs: Global.ID[] = ["202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219"];
    const defenseIDs: Global.ID[] = ["401", "402", "403", "404", "405", "406", "407", "408", "502", "503"];
    // const missionsIDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "15"]; // No large sprites there tbh

    const initialState: Global.State = {
        cdn: {
            resources: {
                metal: {
                    src: "https://gf3.geo.gfsrv.net/cdnbb/a9fe14ed992de9b7f40d22213a475e.png",
                    position: "0px -160px",
                    width: "48px",
                    height: "32px"
                },
                crystal: {
                    src: "https://gf3.geo.gfsrv.net/cdnbb/a9fe14ed992de9b7f40d22213a475e.png",
                    position: "-48px -160px",
                    width: "48px",
                    height: "32px"
                },
                deuterium: {
                    src: "https://gf3.geo.gfsrv.net/cdnbb/a9fe14ed992de9b7f40d22213a475e.png",
                    position: "-96px -160px",
                    width: "48px",
                    height: "32px"
                },
                antimatter: {
                    // gif: "https://gf1.geo.gfsrv.net/cdnc5/401d1a91ff40dc7c8acfa4377d3d65.gif", // need to extend the Sprite type&component for gifs
                    src: "https://gf3.geo.gfsrv.net/cdnbb/a9fe14ed992de9b7f40d22213a475e.png",
                    position: "-192px -160px",
                    width: "48px",
                    height: "32px"
                },
                energy: {
                    src: "https://gf3.geo.gfsrv.net/cdnbb/a9fe14ed992de9b7f40d22213a475e.png",
                    position: "-144px -160px",
                    width: "48px",
                    height: "32px"
                }
            },
            buildings: mapLargeSprites(buildingsIDs), // resource buildings, lacks station/moon buildings
            research: mapLargeSprites(researchIDs, "68.96%"),
            ships: mapLargeSprites(shipsIDs, "51.72%"),
            defense: mapLargeSprites(defenseIDs, "34.48%"),
            officers: {
                commander: {
                    src: "https://gf3.geo.gfsrv.net/cdne7/5cc4cca6a362b93d874107caabf3b4.png",
                    position: "-45px 0px",
                    width: "32px",
                    height: "32px"
                },
                admiral: {
                    src: "https://gf3.geo.gfsrv.net/cdne7/5cc4cca6a362b93d874107caabf3b4.png",
                    position: "0px 0px",
                    width: "32px",
                    height: "32px"
                },
                engineer: {
                    src: "https://gf3.geo.gfsrv.net/cdne7/5cc4cca6a362b93d874107caabf3b4.png",
                    position: "-90px 0px",
                    width: "32px",
                    height: "32px"
                },
                geologist: {
                    src: "https://gf3.geo.gfsrv.net/cdne7/5cc4cca6a362b93d874107caabf3b4.png",
                    position: "-135px 0px",
                    width: "32px",
                    height: "32px"
                },
                technocrat: {
                    src: "https://gf3.geo.gfsrv.net/cdne7/5cc4cca6a362b93d874107caabf3b4.png",
                    position: "-180px 0px",
                    width: "32px",
                    height: "32px"
                }
            },
            classes: { // needs cdn for proper sizing
                none: {
                    src: "https://gf3.geo.gfsrv.net/cdn89/7924c98af4dc3dc0def79275ebcd7f.png",
                    position: "0px 0px",
                    width: "40px",
                    height: "40px"
                },
                miner: {
                    src: "https://gf3.geo.gfsrv.net/cdn87/ebadb2179a145168f234a9287786c1.png", // https://s167-pl.ogame.gameforge.com/cdn/img/mco/characterclasses/miner_200.png
                    position: "0px 0px",
                    width: "40px",
                    height: "40px"
                },
                warrior: {
                    src: "https://gf3.geo.gfsrv.net/cdn2b/4820e3768f76849d1faa718d57b09e.png", // https://s167-pl.ogame.gameforge.com/cdn/img/mco/characterclasses/warrior_200.png
                    position: "0px 0px",
                    width: "40px",
                    height: "40px"
                },
                explorer: {
                    src: "https://gf3.geo.gfsrv.net/cdn58/a7226db4268e3c22d65a3fbd936975.png", // https://s167-pl.ogame.gameforge.com/cdn/img/mco/characterclasses/explorer_200.png
                    position: "0px 0px",
                    width: "40px",
                    height: "40px"
                }
            },
            icons: {
                adviceNotification: {
                    src: "https://gf3.geo.gfsrv.net/cdne4/d386882e5c67089b9b61de50acf88d.gif"
                },
                vacation: {
                    src: "https://gf2.geo.gfsrv.net/cdnaa/992972c34e4757cd146f4358360c02.gif"
                }
            }
        },
        data: {
            advertisement: {
                bannerURL: [
                    "https://gf1.geo.gfsrv.net/cdn3f/af316617574e981d0771fe9feefb48.jpg",
                    "https://gf3.geo.gfsrv.net/cdn86/bd3c2840dbf30b81ea8f96e4dcfadc.jpg", // bigger width
                    "https://gf2.geo.gfsrv.net/cdna7/59e0701bc240053ae41cfb6b6ee4ae.jpg", // bigger width
                    "https://gf2.geo.gfsrv.net/cdn10/96aebcf12389c4776c551cb2ac6689.jpg"
                ][Math.floor(Math.random()*4)], // hardcoded length cause i can and its temp data source anyways XD
                href: "/"    
            },
            player: {
                name: "Eghizio",
                rank: 420
            },
            navigation: [
                { name: "Overview", icon: "🌎" },
                { name: "Resources", icon: "⛏️" },
                { name: "Station", icon: "🛰️" },
                { name: "Trader", icon: "💰" },
                { name: "Research", icon: "🧪" },
                { name: "Shipyard", icon: "🏗️" },
                { name: "Fleet", icon: "🚀" },
                { name: "Galaxy", icon: "🌌" },
                { name: "Alliance", icon: "👪" },
                { name: "Cantine", icon: "⭐" },
                { name: "Shop", icon: "💎" }
            ],
            event: { name: "Moon 100%", expires: new Date(Date.now()+86400000) }, // 24h just for dev purpose
            notice: { name: "Attacks blocked", description: `Attacks are blocked until ${new Date(Date.now()+86400000).toISOString()}.` },
            maxPlanets: 5, // will be calculated from Astrophysics research level
            planets: [
                { name: "Planet 1", coords: [1,284,6], id: 1, moon: { name: "Moon", id: 1} },
                { name: "Planet 2", coords: [1,284,7], id: 2, moon: { name: "Pandora", id: 2} },
                { name: "Planet 3", coords: [1,284,8], id: 3 }
            ],
            resources: [
                { name: "Metal", amount: 16512, storage: 75000, production: 5000, shelter: 2100 },
                { name: "Crystal", amount: 4200, storage: 40000, production: 2137, shelter: 1500 },
                { name: "Deuterium", amount: 1234, storage: 10000, production: 420, shelter: 1200 },
                { name: "Antimatter", amount: 10000,  bought: 0, found: 10000 },
                { name: "Energy", amount: 4000, production: 10000, usage: 6000 }
            ],
            playerClasses: [ "Miner", "Warrior", "Explorer" ]
        }
    };

    return initialState;
};
