let data = [{
    id: 1,
    title: "Estudar html"
}, {
    id: 2,
    title: "Esduar css"
}, {
    id: 3,
    title: "Estudar javascript"
}, {
    id: 4,
    title: "Estudar PHP"
}];

data.forEach(task => {
    let li = document.createElement('li');

    li.innerHTML = `
    
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label>
    
    `;

    document.querySelector('.todo').append(li);
});