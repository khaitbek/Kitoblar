export const lang = {
    uz: {
        choose_lang: "Til",
        home_page_link: "Bosh sahifa",
        books_page_link: "Kitoblar",
        add_author: "Muallif qo'shish",
        add_book: "Kitob qo'shish",
        forgot_password: "Parolni unutdingizmi?",
        login: "Tizimga kirish",
        logout: "Tizimdan chiqish",
        register: "Ro'yxatdan o'tish",
        already_has_account: "Akkauntingiz bormi?",
        no_account: "Akkauntingiz yo'qmi?",
        invalid_f_name: "Kamida 2 ta belgi kiriting",
        invalid_l_name: "Kamida 1 ta belgi kiriting",
        invalid_password: "Parol kamida 8ta belgidan iborat bo'lishi shart",
        invalid_email: "Noto'g'ri formatdagi pochta!",
        invalid_phone: "Noto'g'ri formatdagi telefon raqam!",
        password: "Parol",
        email: "pochta",
        phone: "Telefon raqam",
        f_name: "Ism",
        l_name: "Familiya",
        address: "Manzil",
        settings: "Sozlamalar",
        old_password: "Eski parolni kiriting",
        new_password: "Yangi parolni kiriting",
        save_changes: "Saqlash",
        profile: "Profil",
        main_categories: "Asosiy kategoriyalar",
        search: "Qidirish",
        search_placeholder: "Adiblar, kitoblar, audiolar, maqolalar...",
        category: {
            1: "Temuriylar davri",
            2: "Jadid adabiyoti",
            3: "Sovet davri",
            4: "Mustaqillik davri"
        },
        security: "Xavfsizlik",
    },
    en: {
        choose_lang: "language",
        home_page_link: "Home Page",
        add_author: "Add author",
        add_booko: "Add book",
        books_page_link: "Books",
        forgot_password: "Forgot password",
        login: "Login",
        logout: "Log out",
        register: "Register",
        already_has_account: "Already have an account?",
        no_account: "No account?",
        invalid_f_name: "At leat 2 characters",
        invalid_l_name: "At leat 2 characters",
        invalid_password: "At leat 8 characters",
        invalid_email: "Invalid email!",
        invalid_phone: "Invalid phone number!",
        password: "Password",
        email: "Email",
        phone: "Phone number",
        f_name: "First name",
        l_name: "Last name",
        address: "address",
        settings: "Settings",
        old_password: "Enter your old password",
        new_password: "Enter your new password",
        save_changes: "Submit",
        profile: "Profile",
        main_categories: "Main categories",
        search: "Search",
        search_placeholder: "Writers, books, audiobooks, articles...",
        category: {
            1: "The Age of Timurids",
            2: "Modern Literature",
            3: "Soviet times",
            4: "The Age of Independence"
        },
        security: "Security",

    },
    ru: {
        choose_lang: "язык",
        home_page_link: "Главная страница",
        books_page_link: "книги",
        add_author: "Добавить автора",
        add_booko: "Добавить книги",
        forgot_password: "Забыли пароль ?",
        logout: "Выйти",
        register: "зарегистрироваться",
        already_has_account: "У вас уже есть аккаунт?",
        no_account: "Нет аккаунта?",
        invalid_f_name: "Не менее 2 символов",
        invalid_l_name: "Не менее 2 символов",
        invalid_password: "Не менее 8 символов",
        invalid_email: "Неверный адрес электронной почты!",
        invalid_phone: "Неправильный номер телефона!",
        password: "Пароль",
        email: "Эл. адрес",
        phone: "Номер телефона",
        f_name: "Имя",
        l_name: "Фамилия",
        address: "адрес",
        settings: "Hастройки",
        old_password: "Введите старый пароль",
        new_password: "Введите новый пароль",
        profile: "Профиль",
        main_categories: "Основные категории",
        search: "Поиск",
        search_placeholder: "Писатели, книги, аудиокниги, статьи...",
        category: {
            1: "Эпоха Тимуридов",
            2: "Современная литература",
            3: "Советские времена",
            4: "Эпоха независимости"
        },
        security: "Безопасность",

    }
}

function addWord(name: string, uz: string, en: string, ru: string) {
    Object.defineProperty(lang.uz, name, {
        value: uz,
        writable: false
    });
    Object.defineProperty(lang.en, name, {
        value: en,
        writable: false
    });
    Object.defineProperty(lang.ru, name, {
        value: ru,
        writable: false
    });
};

addWord("date_of_birth", "Tug'ilgan sana", "Date of birth", "Дата рождения");
addWord("date_of_death", "Vafot etgan sana", "Date of death", "Дата смерти");
addWord("country", "Davlat", "Country", "Страна");
addWord("biography", "Biografiya", "Biography", "биография");
addWord("category_id", "Kategoriya id", "Category id", "Идентификатор категории");
addWord("image", "Rasmni tanlang", "Click or drag file to this area to upload", "Нажмите или перетащите файл в эту область, чтобы загрузить");
addWord("add_book", "Kitob qo'shish", "Add book", "Добавить книгу");
addWord("pages", "Sahifalar soni", "Number of pages", "Количество страниц");
addWord("book_title", "Kitobning nomi", "Title", "Заголовок");
addWord("date_of_release", "Nashr qilingan yili", "Date of release", "Дата выпуска");
addWord("price", "Narxi", "Price", "Цена");
addWord("description", "Kitob haqida ma'lumot", "Description", "Описание");
