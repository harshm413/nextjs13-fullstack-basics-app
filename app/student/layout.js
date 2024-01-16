'use client';
import { useRouter } from 'next/navigation';
export default ({ children }) => {
    const router = useRouter();
    return (
        <>
            <div className="buttons-area">
                <button onClick={() => router.push('/student/showAll')}>
                    Show all student
                </button>
                <button onClick={() => router.push('/student/findOne')}>
                    Show a specific student
                </button>
                <button onClick={() => router.push('/student/addOne')}>
                    Add a student
                </button>
                <button onClick={() => router.push('/student/deleteId')}>
                    Delete a student
                </button>
            </div>
            {children}
        </>
    );
};
