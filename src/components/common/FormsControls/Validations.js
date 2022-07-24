
export const loginValidation = {
    required: "Поле обязательно к заполнению",
    validate: (value) => {
        if (value.match(/[а-яА-я]/)) {
            return "Логин не может содержать русские буквы"
        }
        return true
    }
}