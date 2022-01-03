import { useState } from "react";

import './treeView.css';

export default function TreeView({
    data,
    toggled = true,
    name = null,
    isLast = true,
    isChildElement = false,
    isParentToggled = true
}) {
    console.log(data, toggled, name, isLast, isChildElement, isParentToggled);
    const [isToggled, setIsToggled] = useState(toggled);
    return (
        <div key={Math.random() * 1E9} style={{ marginLeft: isChildElement ? '16px' : '4px' }} className={isParentToggled ? "tree-element" : 'tree-element collapsed'}>
            <span className={isToggled ? 'toggler' : 'toggler closed'} onClick={() => setIsToggled(!isToggled)}>
                {name ? <strong>&nbsp;&nbsp;{name}:</strong> : <span>&nbsp;&nbsp;</span>}
                {Array.isArray(data) ? "[" : "{"}
                {isToggled && "..."}
                {Object.keys(data).map(
                    (v, i, a) => typeof data[v] === 'object' ?
                        (<TreeView
                            key={v + Math.random() * 1E9}
                            data={data[v]}
                            name={Array.isArray(data) ? null : v}
                            isLast={i === a.length - 1}
                            isChildElement
                            isParentToggled={isParentToggled && isToggled}
                        />
                        ) : (
                            <p
                                key={v + Math.random() * 1E9}
                                style={{ marginLeft: '4px' }}
                                className={isToggled ? 'tree-element' : 'tree-element collapsed'}
                            >
                                {Array.isArray(data) ? "" : <strong>{v}:</strong>}
                                {data[v]}
                                {i === a.length - 1 ? "" : ","}
                            </p>
                        )
                )}
                {Array.isArray(data) ? "]" : "}"}
                {isLast ? "," : ""}
            </span>
        </div>
    );
}

