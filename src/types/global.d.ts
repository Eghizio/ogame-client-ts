export default interface GlobalState{
    cdn: {
        buildings: Buildings
        research: Research
        ships: Ships
        defense: Defense
        officers: Officers
        resources: Resources
        classes: Classes
        icons: Icons
    }
}

export interface Buildings{
    1: ISprite
	2: ISprite
	3: ISprite
	4: ISprite
	12: ISprite
	14: ISprite
	15: ISprite
	21: ISprite
	22: ISprite
	23: ISprite
	24: ISprite
	31: ISprite
	33: ISprite
	34: ISprite
	36: ISprite
	41: ISprite
	42: ISprite
	43: ISprite
	44: ISprite
}

export interface Research{
    106: ISprite
	108: ISprite
	109: ISprite
	110: ISprite
	111: ISprite
	113: ISprite
	114: ISprite
	115: ISprite
	117: ISprite
	118: ISprite
	120: ISprite
	121: ISprite
	122: ISprite
	123: ISprite
	124: ISprite
	199: ISprite
}

export interface Ships{
    202: ISprite
	203: ISprite
	204: ISprite
	205: ISprite
	206: ISprite
	207: ISprite
	208: ISprite
	209: ISprite
	210: ISprite
	211: ISprite
	212: ISprite
	213: ISprite
	214: ISprite
	215: ISprite
	216: ISprite
	217: ISprite
	218: ISprite
	219: ISprite
}

export interface Defense{
    401: ISprite
	402: ISprite
	403: ISprite
	404: ISprite
	405: ISprite
	406: ISprite
	407: ISprite
	408: ISprite
	502: ISprite
	503: ISprite
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