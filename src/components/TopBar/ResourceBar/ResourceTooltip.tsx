import React from "react";
import Global from "../../../types/global";


// needs general styling, add colouring and +/- 
const ResourceTooltip: React.FC<Global.Resource> = ({name, amount, production, storage, shelter, bought, found, usage}) => {
    const exist = (prop: any) => prop || prop === 0;
    const labeledProps = [["Amount", amount], ["Storage", storage], ["Production", production], ["Protected", shelter], ["Bought", bought], ["Found", found], ["Usage", usage]];

    return (
        <div style={styles.tooltip}>
            <h3 style={styles.header}>{name}</h3>
            <table>
                <tbody>
                    {labeledProps.map(label => exist(label[1]) && 
                        <tr key={label[0]}>
                            <td style={styles.left}>{label[0]}:</td>
                            <td style={styles.right}>{label[1]}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    tooltip: {
        padding: "3px",
        textAtrgn: "left" as const,
        backgroundColor: "#222",
        border: "2px sotrd #aaa",
        borderRadius: "5px"
    },
    header: {
        margin: "0"
    },
    left: {
        textAlign: "left" as const
    },
    right: {
        textAlign: "right" as const,
        paddingLeft: "2rem"
    }
};

export default ResourceTooltip;