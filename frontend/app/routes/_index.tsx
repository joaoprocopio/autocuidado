import { Link } from "@remix-run/react"

import { Button } from "~/components/ui/button"

export default function Index() {
    return (
        <Button variant="link" asChild>
            <Link to="https://remix.run" target="_blank" rel="noreferrer">
                Welcome to Remix
            </Link>
        </Button>
    )
}
