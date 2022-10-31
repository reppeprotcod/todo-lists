import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "sign up": "Sign up",
      "sign in": "Sign in",
      "sign out": "Sign out",
      "lists": "Lists",
      "create list": "Create list",
      "title": "Title",
      "no lists": "No lists",
      "add note": "Add note",
      "note": "Note",
      "passwords do not match": "Passwords do not match",
      "username": "Username",
      "password": "Password",
      "confirm password": "Confirm password",
      "no notes": "No notes",
      "tasks completed": "tasks completed"
    }
  },
  ru: {
    translation: {
      "sign up": "Регистрация",
      "sign in": "Вход",
      "sign out": "Выход",
      "lists": "Списки",
      "create list": "Создать список",
      "title": "Название",  
      "no lists": "Списков нет",
      "add note": "Добавить запись",
      "note": "Запись",
      "passwords do not match": "Пароли не совпадают",
      "username": "Имя пользователя",
      "password": "Пароль",
      "confirm password": "Подтвердите пароль",
      "no notes": "Нет записей",
      "tasks completed": "выполнено задач"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;