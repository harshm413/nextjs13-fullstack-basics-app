'use client';
import { useRouter } from 'next/navigation';
export default ({ children }) => {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => router.push('/stu/showAll')}>
                Show all student
            </button>
            <button onClick={() => router.push('/stu/findOne')}>
                Show a specific student
            </button>
            <button onClick={() => router.push('/stu/addOne')}>
                Add a student
            </button>
            <button onClick={() => router.push('/stu/deleteId')}>
                Delete a student
            </button>
            {children}
        </div>
    );
};
