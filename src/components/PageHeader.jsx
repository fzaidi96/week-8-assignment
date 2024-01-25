import Link from "next/link"

export default function PageHeader() {
    return (<header className="header">
        <Link href="/"><h2>silly goose</h2></Link>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/urls/about">About Us</Link>
            <Link href="/urls/blog">Blog</Link>
            <button>Subscribe Here</button>
        </nav>
    </header>)
}