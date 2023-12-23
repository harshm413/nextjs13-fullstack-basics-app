'use client';
import { useState } from 'react';
import axios from 'axios';
export default () => {
    const [deleted, setDeleted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let id = e.target.id.value;
        axios
            .delete(`http://localhost:5000/students/${id}`)
            .then(() => {
                console.log(`Student with ID ${id} deleted`);
                setDeleted(true);
            })
            .catch((error) => {
                console.error('Error deleting student:', error);
            });
    };

    const FormComponent = () => (
        <form onSubmit={handleFormSubmit}>
            <label>
                Student ID:
                <input name="id" type="number" />
            </label>
            <button type="submit">Delete Student</button>
        </form>
    );

    return (
        <div>
            {!deleted && <FormComponent />}
            {deleted && <p>Student deleted successfully!</p>}
        </div>
    );
};
