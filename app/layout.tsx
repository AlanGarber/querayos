import Link from 'next/link';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <nav>
                    <Link href="/">
                        code
                    </Link>
                    <Link href="/notes" style={{marginLeft:'10px'}}>
                        About Me
                    </Link>
                </nav>
                {children}
            </body>
        </html>
    );
}