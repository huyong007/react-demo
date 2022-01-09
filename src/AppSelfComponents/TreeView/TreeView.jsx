import React, { Component, useState } from "react";

import { ClassLoading } from "../../components/Loading/Loading";
import './treeView.css';



class TreeView extends Component {
    state = {
        isToggled: true
    }

    setIsToggled = (val) => {
        this.setState({
            isToggled: val
        })
    }
    render() {
        const { data,
            toggled = true,
            name = null,
            isLast = true,
            isChildElement = false,
            isParentToggled = true } = this.props
        const { isToggled } = this.state
        return (
            <div
                style={{ marginLeft: isChildElement ? 16 : 4 + "px" }}
                className={isParentToggled ? "tree-element" : "tree-element collapsed"}
            >
                <span
                    className={isToggled ? "toggler" : "toggler closed"}
                    onClick={() => this.setIsToggled(!isToggled)}
                />
                {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}
                {Array.isArray(data) ? "[" : "{"}
                {!isToggled && "..."}
                {Object.keys(data).map(
                    (v, i, a) =>
                        typeof data[v] == "object" ? (
                            <TreeView
                                key={v + i}
                                data={data[v]}
                                isLast={i === a.length - 1}
                                name={Array.isArray(data) ? null : v}
                                isChildElement
                                isParentToggled={isParentToggled && isToggled}
                            />
                        ) : (
                            <p
                                style={{ marginLeft: 16 + "px" }}
                                className={isToggled ? "tree-element" : "tree-element collapsed"}
                                key={v + data[v]}
                            >
                                {Array.isArray(data) ? "" : <strong>{v}: </strong>}
                                {data[v]}
                                {i === a.length - 1 ? "" : ","}
                            </p>
                        )
                )}
                {Array.isArray(data) ? "]" : "}"}
                {!isLast ? "," : ""}
            </div>
        );
    }

}




export default class extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => {
            this.setState({ data: res });
        })
    }
    render() {
        const { data } = this.state;
        const LoadingTreeView = ClassLoading(props => {
            return Object.keys(props.data).length == 0;
        })(TreeView)
        return (
            <>
                <LoadingTreeView name='data' data={data} />
            </>

        )
    }
}