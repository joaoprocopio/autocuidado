import type { MetaFunction } from "@remix-run/node"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

export const meta: MetaFunction = () => [
    {
        charSet: "utf-8",
    },
    {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
    },
]

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}
