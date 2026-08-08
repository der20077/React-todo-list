# Todo App (React + Vite + Tailwind CSS)

Это современное веб-приложение для управления задачами (To-Do list), созданное на React с использованием Vite, Tailwind CSS, с поддержкой темной темы, голосового ввода, перетаскивания задач (Drag & Drop) и синхронизацией с сервером (MockAPI).

## 🚀 Основные возможности

- **Управление задачами:** Добавление, редактирование (по двойному клику), удаление, отметка о выполнении.
- **Голосовой ввод:** Используйте встроенный микрофон для добавления задач с помощью речи (распознавание `ru-RU`).
- **Дедлайны:** Возможность задать срок выполнения для каждой задачи.
- **Фильтрация:** Просмотр всех, активных или выполненных задач.
- **Сортировка (Drag & Drop):** Меняйте порядок задач, перетаскивая их мышкой.
- **Темная тема:** Автоматическое определение системной темы или ручное переключение (сохраняется в localStorage).
- **Синхронизация:** Данные сохраняются в `localStorage` и синхронизируются с удаленным API (MockAPI).
- **Адаптивный дизайн:** Корректно отображается на мобильных и десктопных устройствах.

## 🛠️ Используемые технологии

- **Frontend:** React 19, Vite, JavaScript
- **Стилизация:** Tailwind CSS 4
- **Drag & Drop:** `@dnd-kit/core` и `@dnd-kit/sortable`
- **Иконки:** `react-icons`, SVG
- **HTTP-клиент:** `axios`
- **Прочее:** Web Speech API (распознавание речи), Context API, кастомные хуки.

## 📁 Структура проекта
```text
src/
├── assets/
&nbsp;&nbsp;&nbsp;&nbsp;└── microphon.png
├── components/
&nbsp;&nbsp;&nbsp;&nbsp;├── App/
&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── App.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── AddTodo.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── CheckboxButton.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── CheckIcon.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── DeadlainBlock.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── DeleteButton.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── DeleteCompletedButton.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── DeleteConfirmModal.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── Header.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── Loader.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── MainContent.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── Notification.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── PlusIcon.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── TodoEditForm.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── TodoFilter.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── TodoItem.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── TodoList.jsx
&nbsp;&nbsp;&nbsp;&nbsp;├── TodoTextDisplay.jsx
&nbsp;&nbsp;&nbsp;&nbsp;└── ToggleTheme.jsx
├── constants/
&nbsp;&nbsp;&nbsp;&nbsp;└── todo.js
├── contexts/
&nbsp;&nbsp;&nbsp;&nbsp;└── NetworkContext.js
├── hooks/
&nbsp;&nbsp;&nbsp;&nbsp;├── todoHelpers.js
&nbsp;&nbsp;&nbsp;&nbsp;├── useLocalStorage.js
&nbsp;&nbsp;&nbsp;&nbsp;├── useTodoApi.js
&nbsp;&nbsp;&nbsp;&nbsp;├── useTodoAction.js
&nbsp;&nbsp;&nbsp;&nbsp;└── useToDoManangment.js
├── providers/
&nbsp;&nbsp;&nbsp;&nbsp;└── NetworkProvider.jsx
├── helpers/
&nbsp;&nbsp;&nbsp;&nbsp;├── dateUtils.js
&nbsp;&nbsp;&nbsp;&nbsp;├── getInishialTheme.js
&nbsp;&nbsp;&nbsp;&nbsp;└── toggleTheme.js
├── main.css
└── main.jsx

## ⚙️ Установка и запуск

Следуйте этим шагам, чтобы запустить проект локально:

**1. Клонируйте репозиторий и установите зависемости**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
