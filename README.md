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
├── assets/ # Статические изображения (microphon.png)
├── components/ # React компоненты
│ ├── App/ # Главный компонент приложения
│ │ └── App.jsx
│ ├── AddTodo.jsx # Форма добавления задачи (включая голос)
│ ├── CheckboxButton.jsx # Кастомный чекбокс
│ ├── CheckIcon.jsx # Иконка галочки
│ ├── DeadlainBlock.jsx # Блок выбора дедлайна
│ ├── DeleteButton.jsx # Кнопка удаления
│ ├── DeleteCompletedButton.jsx # Кнопка удаления выполненных
│ ├── DeleteConfirmModal.jsx # Модальное окно подтверждения
│ ├── Header.jsx # Заголовок приложения
│ ├── Loader.jsx # Компонент загрузки
│ ├── MainContent.jsx # Основной контент (фильтрация, список)
│ ├── Notification.jsx # Уведомление о статусе сети
│ ├── PlusIcon.jsx # Иконка плюса
│ ├── TodoEditForm.jsx # Форма редактирования задачи
│ ├── TodoFilter.jsx # Фильтр задач
│ ├── TodoItem.jsx # Карточка задачи (с перетаскиванием)
│ ├── TodoList.jsx # Список задач (DndContext)
│ ├── TodoTextDisplay.jsx # Отображение текста задачи
│ └── ToggleTheme.jsx # Переключатель темы
├── constants/ # Константы (URL API, ключи localStorage)
│ └── todo.js
├── contexts/ # React Context
│ └── NetworkContext.js
├── hooks/ # Кастомные хуки
│ ├── todoHelpers.js # Вспомогательные функции для Todo
│ ├── useLocalStorage.js # Хук для работы с localStorage
│ ├── useTodoApi.js # Хук для запросов к API
│ ├── useTodoAction.js # Логика действий с задачами (CRUD + сортировка)
│ └── useToDoManangment.js # Логика управления состояниями и API
├── providers/ # Провайдеры контекстов
│ └── NetworkProvider.jsx
├── helpers/ # Вспомогательные функции (форматирование дат, тема)
│ ├── dateUtils.js
│ ├── getInishialTheme.js
│ └── toggleTheme.js
├── main.css # Tailwind стили и переменные
└── main.jsx # Точка входа
```
## ⚙️ Установка и запуск

Следуйте этим шагам, чтобы запустить проект локально:

**1. Клонируйте репозиторий и установите зависемости**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
