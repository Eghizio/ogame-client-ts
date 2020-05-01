import React, { useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalProvider';
import NavigationItem from "./NavigationItem";
import EventTimer from "./EventTimer";
import Notice from "./Notice";


// Create Left and Right Bar container Components, style with flex
const Navigation: React.FC = (props) => {
    const context = useContext(GlobalContext);

    // Only <nav/> should stay here
    return(
        <div style={styles.div}>
            <nav>
                <ul style={styles.ul}>
                    {context && context.data.navigation.map(item => <NavigationItem key={item.name} name={item.name} icon={item.icon}/>)}
                </ul>
            </nav>
            {context && context.data.event.expires.getTime() > Date.now() && 
                <EventTimer name={context.data.event.name} expires={context.data.event.expires}/>}
            {context && 
                <Notice name={context.data.notice.name} description={context.data.notice.description}/>}
        </div>
    );
};

// eslint-disable-next-line
const styles = {
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