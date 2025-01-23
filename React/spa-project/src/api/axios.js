import axios from "axios";

// Создаем экземпляр Axios с базовыми настройками
const axiosInstance = axios.create({
    baseURL: "https://api.example.com", // Укажите свой API URL
    timeout: 5000, // Максимальное время ожидания запроса (в миллисекундах)
    headers: {
        "Content-Type": "application/json", // Заголовки по умолчанию
    },
});

// Перехват запросов (опционально)
axiosInstance.interceptors.request.use(
    (config) => {
        // Здесь можно добавить токен авторизации, если требуется
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Перехват ответов (опционально)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Обработка ошибок (например, 401 или 500)
        if (error.response && error.response.status === 401) {
            console.error("Неавторизованный доступ!");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
