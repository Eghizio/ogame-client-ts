export default interface GlobalState{
    cdn: CDN
}

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

