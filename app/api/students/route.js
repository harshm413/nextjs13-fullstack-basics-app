import students from './students.js';
export function GET() {
    return Response.json(students);
}
export async function POST(req) {
    let newStudent = await req.json();
    students.push({
        id: students.length + 1,
        ...newStudent,
    });
    return new Response(`New student successfully added in the database.`);
}
