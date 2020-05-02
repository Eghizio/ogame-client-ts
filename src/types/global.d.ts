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
        antimatter: Sprite
        energy: Sprite
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

    export type ID = string

    // Data (props / fetched data / etc)
    export interface Data{
        advertisement: Advertisement
        player: Player
        navigation: NavItem[]
        event: Event
        notice: Notice
        maxPlanets: number
        planets: Planet[],
        resources: [MineableResource, MineableResource, MineableResource, Antimatter, Energy]
        playerClasses: [PlayerClass, PlayerClass, PlayerClass]
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

    export interface BaseResource{
        name: string
        amount: number
    }

    export interface ProducableResource extends BaseResource{
        production: number
    }

    export interface MineableResource extends ProducableResource{
        name: "Metal" | "Crystal" | "Deuterium"
        storage: number
        shelter: number //can be calculated, shelter = 24*production* shelter_level(1-10+)%
    }

    export interface Antimatter extends BaseResource{
        name: "Antimatter" // amount <= bought+found
        bought: number
        found: number
    }

    export interface Energy extends ProducableResource{
        name: "Energy"
        usage: number //can be calculated, usage = production - amount
    }

    export type Resource = Required<BaseResource> & Partial<MineableResource | Antimatter | Energy>

    export type PlayerClass = "Miner" | "Warrior" | "Explorer"

}

export default Global;