import { Switch, Route, NavLink, Outlet } from 'react-router-dom'






import selfComponentsConfig from "./selfComponentsConfig";

export default function SelfComponents() {
    return (
        <>
            <nav>
                {selfComponentsConfig.map(({ path, component }) => (
                    <NavLink
                        className='react-link'
                        to={`/self-components/${path}`}
                        key={path}
                        style={({ isActive }) => {
                            return {
                                display: "inline-block",
                                color: isActive ? "red" : "black"
                            }
                        }}
                    >
                        {component}
                    </NavLink>
                ))}
            </nav>
            <Outlet /></>

    )
}