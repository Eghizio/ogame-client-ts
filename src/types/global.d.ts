declare namespace Global {
    export interface State{
        cdn: CDN
        data: Data
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
        commander: Sprite
        admiral: Sprite
        engineer: Sprite
        geologist: Sprite
        technocrat: Sprite
    }

    export interface Resources{
        metal: Sprite
        crystal: Sprite
        deuterium: Sprite
        energy: Sprite
        darkMatter: Sprite
    }

    export interface Classes{
        miner: Sprite
        warrior: Sprite
        explorer: Sprite
    }

    export interface Icons{
        adviceNotification: Sprite
    }

    export interface Sprite{
        src: string
        position?: string
        width?: string
        height?: string
    }

    // What about inactive or unavailable? Custom applied filters?
    // export interface Sprite{
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

    export type SpriteMap = Map<ID, Sprite>

    export type ID = string;

    // Data (props / fetched data / etc)
    export interface Data{
        advertisement: Advertisement
        player: Player
        navigation: NavItem[]
        event: Event
        notice: Notice
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

    export interface Notice{
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
}

export default Global;