import { useEffect, useRef, useState } from "react";
import DeadlainBlock from "./DeadlainBlock";
import PlusIcon from "./PlusIcon";
import MicrofonIcon from "../../assets/microphon.png";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [showSetDeadlineInput, setShowDeadlineInput] = useState(false);
  const [isListening, setIsLisining] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const finalTextRef = useRef("");

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsLisining(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsLisining(false);
      setText(finalTextRef.current.replace(/\./g, ""));
    }
  };

  const toggleListenninng = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = true;
        recognitionInstance.lang = "ru-RU";
        recognitionInstance.interimResults = true;
        recognitionInstance.onresult = (event) => {
          let finalTranscript = "";
          let internScript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript;
            } else {
              internScript += transcript;
            }
            if (finalTranscript) {
              finalTextRef.current =
                finalTextRef.current.trim() + " " + finalTranscript.trim();
              setText(finalTextRef.current.replace(/\./g, ""));
            } else if (internScript) {
              setText(
                (finalTextRef.current + " " + internScript).replace(/\./g, ""),
              );
            }
          }
        };
        recognitionInstance.onerror = (event) => {
          console.error(`Ошибка распознования: ${event.error}`);
          stopListening();
        };

        recognitionInstance.onend = () => {
          if (isListening) {
            recognitionInstance.start();
          }
        };

        setRecognition(recognitionInstance);
      }
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [isListening]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onAdd(text, deadline);
      setText("");
      setDeadline("");
      setShowDeadlineInput(false);
      finalTextRef.current = "";
    } else {
      alert("Введите текст задачи");
    }
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div
        className="flex flex-col min-[375px]:flex-row items-center bg-white rounded-lg shadow-sm overflow-hidden border
       dark:bg-page-dark dark:text-txt-dark border-gray-100 focus-within:ring-2 focus-within:ring-blue-500"
      >
        <input
          className="flex-1 p-3 text-gray-700   outline-none placeholder-gray-400"
          type="text"
          value={text}
          placeholder="Добавить задачу ..."
          onChange={(e) => setText(e.target.value)}
        />
        <div
          className="flex items-center w-full max-[374px]:justify-center justify-end border min-[374px]:border-0
        "
        >
          <button
            type="button"
            onClick={toggleListenninng}
            className={`cursor-pointer p-3 ${
              isListening
                ? "bg-red-700"
                : "bg-gray-200  hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-700"
            }
             transition-colors duration-300 flex items-center justify-center`}
            title={isListening ? "Остановить запись" : "Начать запись"}
          >
            <img
              src={MicrofonIcon}
              alt="Микрофон"
              className={`w-6 h-6 ${isListening ? "brightness-0 invert" : ""}`}
            />
          </button>
          <button
            type="submit"
            className={`p-3${isListening ? "bg-gray-400 cursor-not-allowed" : " bg-btn-light hover:bg-btn-light-hv dark:bg-btn-dark hover:dark:bg-btn-dark-hv cursor-pointer"}
           text-white transition-colors duration-300 `}
            disabled={isListening}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
      <DeadlainBlock
        setDeadline={setDeadline}
        setShowDeadlineInput={setShowDeadlineInput}
        showSetDeadlineInput={showSetDeadlineInput}
        deadline={deadline}
      />
      {isListening && (
        <div className="mt-2 text-sm text-blue-500 flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse mr-2"></div>
          <span>Идёт запись... Нажмините на микрофон для осттановки</span>
        </div>
      )}
    </form>
  );
};

export default AddTodo;
