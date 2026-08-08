import Notification from "./Notification";
import NetworkProvider from "../../providers/NetworkProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const ToogleTheme = ({ toggleTheme, theme }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center cursor-pointer">
        <button className="relative cursor-pointer" onClick={toggleTheme}>
          <div className="bg-gray-300 shadow-inner rounded-full w-14 h-7 transition-colors duration-300 dark:bg-btn-dark">
            <div
              className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 translate-x-0
             dark:translate-x-7 flex items-center justify-center text-sm"
              aria-label={theme === "light" ? "Тёмная тема" : "Светлая тема"}
            >
              {theme === "light" ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-blue-700" />
              )}
            </div>
          </div>
        </button>
      </div>
      <NetworkProvider>
        <Notification />
      </NetworkProvider>
    </div>
  );
};

export default ToogleTheme;
