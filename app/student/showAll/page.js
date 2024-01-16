'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Student } from '../Student.js';
export default () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/students')
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            {students.map((student) => (
                <Student key={student.id} {...student} />
            ))}
        </div>
    );
};
