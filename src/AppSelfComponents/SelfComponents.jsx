import { Switch, Route, Link, Outlet } from 'react-router-dom'






import selfComponentsConfig from "./selfComponentsConfig";

export default function SelfComponents() {
    return (
        <>
            <nav>
                {selfComponentsConfig.map(({ path, component }) => (
                    <Link
                        className='react-link'
                        to={`/self-components/${path}`}
                        key={path}
                    >
                        {component}
                    </Link>
                ))}
            </nav>
            <Outlet /></>

    )
}