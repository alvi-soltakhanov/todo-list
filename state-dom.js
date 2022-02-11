const notes = [
  {
    text: "Начать уделять больше времени програмированию", // <- текст дела
    done: true, //<- выполнено дело или нет
  },
  {
    text: "Отдыхать два раза в ниделю",
    done: true,
  },
  {
    text: "Начать читать",
    done: false,
  },
  {
    text: "Купить куллер",
    done: false,
  },
];

// Добавление элементов в SCRIPT

const add_btn = document.querySelector(".add_btn");
const add_input = document.querySelector(".add_input");
const todoList = document.getElementById("todo_list");

// Функция вывода элементов из массива

function render(notes) {
  todoList.innerHTML = "";

  // Перебор элементов в массиве
  notes.forEach((item, index) => {
    // Создание элементов
    const note = document.createElement("div");
    const text = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const delete_btn = document.createElement("button");

    text.textContent = item.text;

    if (item.done) {
      note.style.textDecoration = "line-through";
      checkbox.checked = true;
    } else {
      note.style.textDecoration = "none";
      checkbox.checked = false;
    }
    note.append(checkbox, text, delete_btn);
    // Добавление элементов в один DIV
    todoList.append(note);

    // Подключение стилей
    note.classList.add("note-style");
    text.classList.add("text-style");
    checkbox.classList.add("checkbox-style");
    delete_btn.classList.add("delete_btn-style");

    // Удаление элемента по клику

    delete_btn.addEventListener("click", (e) => {
      notes.splice(index, 1);
      render(notes)
    });

    checkbox.addEventListener("click", (e) => {
      checkTodo(index);
    });
  });
}
render(notes);

// Добавлние элемента

add_btn.addEventListener("click", (e) => {
  if (add_input.value) {
    const addText = {
      text: add_input.value,
      done: false,
    };
    notes.push(addText);
    add_input.value = "";
  } else {
    alert("Ведите запись");
  }
  render(notes)
});

const checkTodo = (index) => {
  notes[index].done = !notes[index].done;
  render(notes);
};
