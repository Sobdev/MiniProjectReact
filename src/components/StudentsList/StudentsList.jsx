import StudentRow from "../StudentRow/StudentRow"

const StudentsList = () => {
    return (
        <div className="StudentsList">
            <h1>Soy la lista de estudiantes</h1>
            <hr />
            <StudentRow />
            <StudentRow />
            <StudentRow />
            <StudentRow />
        </div>
    )
}

export default StudentsList