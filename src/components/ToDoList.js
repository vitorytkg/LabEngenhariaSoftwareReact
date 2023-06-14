export default function ToDoList() {
    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    }
    return (
        <div style={person.theme}>
            <h1>ToDoList - {person.name}'s Todos</h1>
            <img
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
                className="Photo"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}