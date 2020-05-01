import React, { createContext } from "react";
import GlobalState, { ID, ISprite } from "../types/global";


const GlobalContext = createContext<GlobalState|null>(null);

export interface GlobalProviderProps{
    children: any
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({children}) => {
    // Simulates fetched data or assets from API or CDN
    // might move some of the properties into the Components or CSS
    const data: GlobalState = initializeGlobalState();

    return (
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;

export { GlobalContext };

const mapLargeSprites = (ids: ID[], initialY = "0px") => {
    const spriteSheet = "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg";
    let x = 0;
    let y = initialY;
    const width = 200;
    const height = 200;

    const spriteMap = new Map<string, ISprite>();

    // it is blocking tho, setTimeout zero ?, promises?
    ids.forEach((id, i) => {
        x = width * -i;

        const sprite: ISprite = {
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
    const buildingsIDs: ID[] = ["1", "2", "3", "4", "12", "14", "15", "21", "22", "23", "24", "31", "33", "34", "36", "41", "42", "43", "44"];
    const researchIDs: ID[] = ["106", "108", "109", "110", "111", "113", "114", "115", "117", "118", "120", "121", "122", "123", "124", "199"];
    const shipsIDs: ID[] = ["202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219"];
    const defenseIDs: ID[] = ["401", "402", "403", "404", "405", "406", "407", "408", "502", "503"];
    // const missionsIDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "15"]; // No large sprites there tbh

    const initialState: GlobalState = {
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
                energy: {
                    src: "https://gf3.geo.gfsrv.net/cdnbb/a9fe14ed992de9b7f40d22213a475e.png",
                    position: "-144px -160px",
                    width: "48px",
                    height: "32px"
                },
                darkMatter: {
                    src: "https://gf1.geo.gfsrv.net/cdnc5/401d1a91ff40dc7c8acfa4377d3d65.gif",
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
            classes: {
                miner: {
                    src: "https://gf3.geo.gfsrv.net/cdn87/ebadb2179a145168f234a9287786c1.png", //https://s167-pl.ogame.gameforge.com/cdn/img/mco/characterclasses/miner_200.png
                    width: "60px",
                    height: "60px"
                },
                warrior: {
                    src: "",
                    width: "60px",
                    height: "60px"
                },
                explorer: {
                    src: "", //https://s167-pl.ogame.gameforge.com/cdn/img/mco/characterclasses/explorer_200.png
                    width: "60px",
                    height: "60px"
                }
            },
            icons: {
                adviceNotification: {
                    src: "https://gf3.geo.gfsrv.net/cdne4/d386882e5c67089b9b61de50acf88d.gif"
                }
            }
        },
        data: {
            advertisement: {
                bannerURL: [
                    "https://gf1.geo.gfsrv.net/cdn3f/af316617574e981d0771fe9feefb48.jpg",
                    "https://gf3.geo.gfsrv.net/cdn86/bd3c2840dbf30b81ea8f96e4dcfadc.jpg",
                    "https://gf2.geo.gfsrv.net/cdna7/59e0701bc240053ae41cfb6b6ee4ae.jpg"
                ][Math.floor(Math.random()*3)], // hardcoded length cause i can and its temp data source anyways XD
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
            event: { name: "Moon 100%", expires: new Date(Date.now()+86400000) },
            notice: { name: "Attacks blocked", description: "Attacks are blocked until 27.04.2020 10:00:00. W tym czasie nie mogą być wysyłane wrogie floty." }
        }
    };

    return initialState;
};
