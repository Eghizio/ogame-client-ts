export default interface GlobalState{
    cdn: CDN
    data: GlobalData
}

// CDN ( external asset source / easily replacable )
export interface CDN{
    // [key: string]: SpriteMap
	buildings: SpriteMap
	research: SpriteMap
	ships: SpriteMap
	defense: SpriteMap
	officers: Officers
	resources: Resources
	classes: Classes
	icons: Icons
}

export interface Officers{
    commander: ISprite
    admiral: ISprite
    engineer: ISprite
    geologist: ISprite
    technocrat: ISprite
}

export interface Resources{
    metal: ISprite
    crystal: ISprite
    deuterium: ISprite
    energy: ISprite
    darkMatter: ISprite
}

export interface Classes{
    miner: ISprite
    warrior: ISprite
    explorer: ISprite
}

export interface Icons{
    adviceNotification: ISprite
}

export interface ISprite{
    src: string
    position?: string
    width?: string
    height?: string
}

// What about inactive or unavailable? Custom applied filters?
// export interface ISprite{
// 	    src: string
// 	    large: SpriteSize
// 	    medium?: SpriteSize
//      small?: SpriteSize
// }

// export interface SpriteSize{
// 	    position?: string
//      width?: string
//      height?: string
// }

export type SpriteMap = Map<ID, ISprite>

export type ID = string;

// Global Data (props / fetched data / etc)
export interface GlobalData{
    advertisement: Advertisement
    player: Player
    navigation: NavItem[]
    event: Event
    notice: INotice
    maxPlanets: number
    planets: Planet[]
}

export interface Advertisement{
    bannerURL: string
    href: string
}

export interface Player{
    name: string
    rank: number
}

export interface NavItem{
    name: string
    icon: string
}

export interface Event{
    name: string
    expires: Date
}

export interface INotice{
    name: string
    description: string
}

export interface Planet{
    id: number
    name: string
    coords: [number, number, number]
    moon?: Moon
}

export interface Moon{
    id: number
    name: string
}