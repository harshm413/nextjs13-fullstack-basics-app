'use client';
import { useState } from 'react';
import axios from 'axios';
import { Student } from '../Student.js';
export default () => {
    const [student, setStudent] = useState(null);

    function fetchStudentDetails(studentId) {
        axios
            .get(`http://localhost:3000/api/students/${studentId}`)
            .then((response) => {
                setStudent(response.data);
            });
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        let id = e.target.id.value;
        fetchStudentDetails(id);
    }
    function FormComponent() {
        return (
            <form onSubmit={handleFormSubmit}>
                <label>
                    Enter Student ID:
                    <input name="id" type="number" />
                </label>
                <button type="submit">Fetch Student Details</button>
            </form>
        );
    }
    return (
        <div>
            {!student && <FormComponent />}
            {student && (
                <div>
                    <h2>Student</h2>
                    <Student key={student.id} {...student} />
                </div>
            )}
        </div>
    );
};
