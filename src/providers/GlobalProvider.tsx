import React, { createContext } from "react";
import GlobalState from "../types/global";


const GlobalContext = createContext<any>(null);

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

// big sprite
// https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg
const initializeGlobalState = () => {
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
            buildings: {
                1: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                2: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                3: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                4: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                12: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                14: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                15: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                21: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                22: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                23: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                24: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                31: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                33: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                34: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                36: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                41: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                42: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                43: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                44: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				}
            },
            research: {
                106: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                108: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                109: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                110: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                111: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                113: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                114: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                115: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                117: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                118: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                120: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                121: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                122: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                123: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                124: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                199: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				}
            },
            ships: {
                202: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                203: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                204: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                205: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                206: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                207: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                208: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                209: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                210: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                211: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                212: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                213: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                214: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                215: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                216: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                217: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                218: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                219: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				}
            },
            defense: {
                401: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                402: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                403: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                404: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                405: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                406: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                407: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                408: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                502: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				},
                503: {
					src: "https://gf3.geo.gfsrv.net/cdn53/7a9861be0c38bf7de05a57c56d73cf.jpg",
					position: "0px 0px",
					width: "200px",
					height: "200px"
				}
            },
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
        }
    };

    return initialState;
};

// ["Kopalnia metalu", "Kopalnia kryształu", "Ekstraktor deuteru", "Elektrownia słoneczna", "Elektrownia fuzyjna", "Fabryka robotów", "Fabryka nanitów", "Stocznia", "Magazyn metalu", "Magazyn kryształu", "Zbiornik deuteru", "Laboratorium badawcze", "Terraformer", "Depozyt sojuszniczy", "Dok kosmiczny", "Stacja księżycowa", "Falanga czujników", "Teleporter", "Silos rakietowy"]
// ["Metal Mine", "Metal Storage", "Crystal Mine", "Crystal Storage", "Deuterium Synthesizer", "Deuterium Tank", "Solar Plant", "Fusion Reactor", "Robotics Factory", "Nanite Factory", "Shipyard", "Space Dock", "Missile Silo", "Research Lab", "Alliance Depot", "Terraformer", "Lunar Base", "Sensor Phalanx", "Jump Gate", "Energy Technology", "Laser Technology", "Ion Technology", "Hyperspace Technology", "Plasma Technology", "Espionage Technology", "Computer Technology", "Astrophysics", "Intergalactic Research Network", "Graviton Technology", "Combustion Drive", "Impulse Drive", "Hyperspace Drive", "Weapons Technology", "Shielding Technology", "Armour Technology", "Light Fighter", "Heavy Fighter", "Cruiser", "Battleship", "Battlecruiser", "Bomber", "Destroyer", "Deathstar", "Reaper", "Pathfinder", "Small Cargo", "Large Cargo", "Colony Ship", "Recycler", "Espionage Probe", "Solar Satellite", "Crawler", "Trade Ship", "Rocket Launcher", "Light Laser", "Heavy Laser", "Ion Cannon", "Gauss Cannon", "Plasma Turret", "Small Shield Dome", "Large Shield Dome", "Anti-Ballistic Missiles", "Interplanetary Missiles", "Attack", "ACS Attack", "Transport", "Deployment", "ACS Defend", "Espionage", "Colonisation", "Recycle debris field", "Moon Destruction", "Expedition"]

// [{"name":"Metal Mine","id":"1"},{"name":"Crystal Mine","id":"2"},{"name":"Deuterium Synthesizer","id":"3"},{"name":"Solar Plant","id":"4"},{"name":"Fusion Reactor","id":"12"},{"name":"Robotics Factory","id":"14"},{"name":"Nanite Factory","id":"15"},{"name":"Shipyard","id":"21"},{"name":"Metal Storage","id":"22"},{"name":"Crystal Storage","id":"23"},{"name":"Deuterium Tank","id":"24"},{"name":"Research Lab","id":"31"},{"name":"Terraformer","id":"33"},{"name":"Alliance Depot","id":"34"},{"name":"Space Dock","id":"36"},{"name":"Lunar Base","id":"41"},{"name":"Sensor Phalanx","id":"42"},{"name":"Jump Gate","id":"43"},{"name":"Missile Silo","id":"44"},{"name":"Espionage Technology","id":"106"},{"name":"Computer Technology","id":"108"},{"name":"Weapons Technology","id":"109"},{"name":"Shielding Technology","id":"110"},{"name":"Armour Technology","id":"111"},{"name":"Energy Technology","id":"113"},{"name":"Hyperspace Technology","id":"114"},{"name":"Combustion Drive","id":"115"},{"name":"Impulse Drive","id":"117"},{"name":"Hyperspace Drive","id":"118"},{"name":"Laser Technology","id":"120"},{"name":"Ion Technology","id":"121"},{"name":"Plasma Technology","id":"122"},{"name":"Intergalactic Research Network","id":"123"},{"name":"Astrophysics","id":"124"},{"name":"Graviton Technology","id":"199"},{"name":"Small Cargo","id":"202"},{"name":"Large Cargo","id":"203"},{"name":"Light Fighter","id":"204"},{"name":"Heavy Fighter","id":"205"},{"name":"Cruiser","id":"206"},{"name":"Battleship","id":"207"},{"name":"Colony Ship","id":"208"},{"name":"Recycler","id":"209"},{"name":"Espionage Probe","id":"210"},{"name":"Bomber","id":"211"},{"name":"Solar Satellite","id":"212"},{"name":"Destroyer","id":"213"},{"name":"Deathstar","id":"214"},{"name":"Battlecruiser","id":"215"},{"name":"Trade Ship","id":"216"},{"name":"Crawler","id":"217"},{"name":"Reaper","id":"218"},{"name":"Pathfinder","id":"219"},{"name":"Rocket Launcher","id":"401"},{"name":"Light Laser","id":"402"},{"name":"Heavy Laser","id":"403"},{"name":"Gauss Cannon","id":"404"},{"name":"Ion Cannon","id":"405"},{"name":"Plasma Turret","id":"406"},{"name":"Small Shield Dome","id":"407"},{"name":"Large Shield Dome","id":"408"},{"name":"Anti-Ballistic Missiles","id":"502"},{"name":"Interplanetary Missiles","id":"503"}]