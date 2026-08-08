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
src/
├── assets/                                                                      
│ └── microphon.png
├── components/
│ ├── App/
│ │ └── App.jsx
│ ├── AddTodo.jsx
│ ├── CheckboxButton.jsx
│ ├── CheckIcon.jsx
│ ├── DeadlainBlock.jsx
│ ├── DeleteButton.jsx
│ ├── DeleteCompletedButton.jsx
│ ├── DeleteConfirmModal.jsx
│ ├── Header.jsx
│ ├── Loader.jsx
│ ├── MainContent.jsx
│ ├── Notification.jsx
│ ├── PlusIcon.jsx
│ ├── TodoEditForm.jsx
│ ├── TodoFilter.jsx
│ ├── TodoItem.jsx
│ ├── TodoList.jsx
│ ├── TodoTextDisplay.jsx
│ └── ToggleTheme.jsx
├── constants/
│ └── todo.js
├── contexts/
│ └── NetworkContext.js
├── hooks/
│ ├── todoHelpers.js
│ ├── useLocalStorage.js
│ ├── useTodoApi.js
│ ├── useTodoAction.js
│ └── useToDoManangment.js
├── providers/
│ └── NetworkProvider.jsx
├── helpers/
│ ├── dateUtils.js
│ ├── getInishialTheme.js
│ └── toggleTheme.js
├── main.css
└── main.jsx

## ⚙️ Установка и запуск

Следуйте этим шагам, чтобы запустить проект локально:

**1. Клонируйте репозиторий и установите зависемости**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
