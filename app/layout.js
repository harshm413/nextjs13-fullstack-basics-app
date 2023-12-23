'use client';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="container">
                    <div className="header-section">
                        <h2>Student Teacher App</h2>
                    </div>
                    <div className="home-button">
                        <Link href="/">Home</Link>
                    </div>

                    {children}
                </div>
            </body>
        </html>
    );
}
