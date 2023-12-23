'use client';
import Link from 'next/link';
export default function Home() {
    return (
        <div>
            <Link href="/stu">Students</Link>
            <Link href="/tea">Teachers</Link>
        </div>
    );
}
