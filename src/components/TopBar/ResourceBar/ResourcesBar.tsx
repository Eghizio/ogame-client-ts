import React from 'react';
import Resource from "./Resource";

export interface ResourcesBarProps {

}

export type resource = "Metal" | "Crystal" | "Deuterium" | "Antimatter" | "Energy";
export interface ResourceProps {
    id?: string
    resourceType: resource
    amount: number
    storage: number
    production: number
    shelter: number
}

const sampleProps: ResourceProps[] = [
    { resourceType: "Metal", amount: 10000, storage: 75000, production: 2137, shelter: 2100 },
    { resourceType: "Crystal", amount: 4200, storage: 75000, production: 2137, shelter: 1500 },
    { resourceType: "Deuterium", amount: 10000, storage: 75000, production: 2137, shelter: 1200 },
    { resourceType: "Antimatter", amount: 10000, storage: 75000, production: 2137, shelter: 1200 },
    { resourceType: "Energy", amount: 10000, storage: 75000, production: 2137, shelter: 1200 },
];

const ResourcesBar: React.FC<ResourcesBarProps> = (props) => {
    const resources = ["Metal", "Crystal", "Deuterium", "Antimatter", "Energy"];

    return (
        <div style={{display: "flex"}}>
            {resources.map((r,i) => <Resource {...sampleProps[i]} key={i} />)}
        </div>
    );
};

// eslint-disable-next-line
const styles = {

};

export default ResourcesBar;