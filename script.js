document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        if (input.value.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${input.value}</span>
            <div>
                <button class="complete-btn">완료</button>
                <button class="delete-btn">삭제</button>
            </div>
        `;

        li.querySelector('.complete-btn').addEventListener('click', completeTodo);
        li.querySelector('.delete-btn').addEventListener('click', deleteTodo);

        todoList.appendChild(li);
        input.value = '';
    }

    function completeTodo(e) {
        const todoItem = e.target.closest('li');
        todoItem.classList.toggle('completed');
    }

    function deleteTodo(e) {
        const todoItem = e.target.closest('li');
        todoList.removeChild(todoItem);
    }
});

