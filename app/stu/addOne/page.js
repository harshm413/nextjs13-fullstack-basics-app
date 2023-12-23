'use client';
import { useState } from 'react';
import axios from 'axios';
export default () => {
    const [success, setSuccess] = useState(false);

    function handleFormSubmit(e) {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            age: e.target.age.value,
            grade: e.target.grade.value,
        };
        axios
            .post('http://localhost:3000/api/students', formData)
            .then((response) => {
                console.log('New student added:', response.data);
                setSuccess(true);
            })
            .catch((error) => {
                console.error('Error adding new student:', error);
            });
    }

    function FormComponent() {
        return (
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" />
                </label>
                <div className="small-field">
                    <label>
                        Age:
                        <input name="age" type="number" />
                    </label>
                    <label>
                        Grade:
                        <input name="grade" type="text" />
                    </label>
                </div>
                <button type="submit">Add Student</button>
            </form>
        );
    }

    return (
        <div>
            {!success && <FormComponent />}
            {success && (
                <div className="message">Student added successfully!</div>
            )}
        </div>
    );
};
