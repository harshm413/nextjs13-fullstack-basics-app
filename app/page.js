'use client';
import Link from 'next/link';
export default function Home() {
    return (
        <div className="select-button-area">
            <Link href="/student">Students</Link>
            <Link href="/teacher">Teachers</Link>
        </div>
    );
}
