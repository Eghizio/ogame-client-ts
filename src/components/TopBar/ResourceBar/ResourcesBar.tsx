import React, { useContext } from 'react';
import Resource from "./Resource";
import { GlobalContext } from '../../../providers/GlobalProvider';


const ResourcesBar: React.FC = () => {
    const context = useContext(GlobalContext);

    if(!context) return null;
    return (
        <div style={styles.resourceBar}>
            {context.data.resources.map(resource => <Resource key={resource.name} {...resource} />)}
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    resourceBar: {
        display: "flex"
    }
};

export default ResourcesBar;