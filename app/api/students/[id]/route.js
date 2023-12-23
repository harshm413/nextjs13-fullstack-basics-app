import students from '../students.js';
export function GET(req, { params }) {
    let id = params.id;
    let foundStudent = students.find((student) => student.id == id);
    return Response.json(foundStudent);
}

export function DELETE(req, { params }) {
    let id = params.id;
    let index = students.findIndex((student) => student.id == id);
    if (index != -1) {
        students.splice(index, 1);
    }
    return new Response(`Student with ID ${id} deleted from the database.`);
}
