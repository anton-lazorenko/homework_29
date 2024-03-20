function calculate(birthday) {
    let today = new Date();
    let birthDate = new Date(birthday)
        age = today - birthDate
        if(age < 0 || age === NaN){
            alert(`Введите корректное значение`)
        }
        return Math.floor(age / (1000 * 60 * 60 * 24 * 30 * 12))
        
    }
    let birthday = ('2025.11.05')
    calculate(birthday)