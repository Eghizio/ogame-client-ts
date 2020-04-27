import React from 'react';
import Item, { ItemData } from "./Item";
import EventTimer from "./EventTimer";

const navigation: ItemData[] = [
    {primary: {children: "Overview",    href: "/overview"},     alt: {children: "🌎", href: "/overview/alt"}  },
    {primary: {children: "Resources",   href: "/resources"},    alt: {children: "⛏️", href: "/resources/alt"} },
    {primary: {children: "Station",     href:"/station"},       alt: {children: "🛰️", href: "/station/alt"}   },
    {primary: {children: "Trader",      href:"/trader"},        alt: {children: "💰", href: "/trader/alt"}    },
    {primary: {children: "Research",    href:"/research"},      alt: {children: "🧪", href: "/research/alt"}  },
    {primary: {children: "Shipyard",    href:"/shipyard"},      alt: {children: "🏗️", href: "/shipyard/alt"}  },
    {primary: {children: "Fleet",       href:"/fleet"},         alt: {children: "🚀", href: "/fleet/alt"}     },
    {primary: {children: "Galaxy",      href:"/galaxy"},        alt: {children: "🌌", href: "/galaxy/alt"}    },
    {primary: {children: "Alliance",    href:"/alliance"},      alt: {children: "👪", href: "/alliance/alt"}  },
    {primary: {children: "Cantine",     href:"/cantine"},       alt: {children: "⭐", href: "/cantine/alt"}   },
    {primary: {children: "Shop",        href:"/shop"},          alt: {children: "💎", href: "/shop/alt"}      }
];

const gameEvent: {name: string, endsAt: Date} = { name: "Moon 100%", endsAt: new Date(2020,3,13,9) };

const Navigation: React.FC = (props) => {
    return(
        <div style={css.div}>
            <nav>
                <ul style={css.ul}>
                    {navigation.map((n, i) => <Item item={n} key={i}></Item>)}
                </ul>
            </nav>
            {gameEvent.endsAt.getTime() > Date.now() && <EventTimer gameEvent={gameEvent}/>}
            {/* advice_notification component, hoverable notification info, for ex 
            "Blokada ataku
            Blokada ataków jest aktywna do 27.04.2020 10:00:00. W tym czasie nie mogą być wysyłane wrogie floty.  */}
        </div>
    );
};

const css = {
    div : {
        width: "180px",
        textAlign: "center" as const,
        padding: "10px"
    },
    ul: {
        padding: "0",
        listStyleType: "none",
        display: "inline-grid"
    }
};

export default Navigation;