import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                Student Teacher App
                <br />
                <Link href="/">Home</Link>
                {children}
            </body>
        </html>
    );
}
