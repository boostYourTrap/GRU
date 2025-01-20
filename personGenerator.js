const personGenerator = {
    surnameJson: `{
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Ольга",
            "id_4": "Елена",
            "id_5": "Татьяна",
            "id_6": "Наталья",
            "id_7": "Светлана",
            "id_8": "Ирина",
            "id_9": "Людмила",
            "id_10": "Виктория"
        }
    }`,

    middleNameJson: `{
        "male": {
            "count": 10,
            "list": {
                "id_1": "Александрович",
                "id_2": "Максимович",
                "id_3": "Иванович",
                "id_4": "Артемович",
                "id_5": "Дмитриевич",
                "id_6": "Никитович",
                "id_7": "Михайлович",
                "id_8": "Даниилович",
                "id_9": "Егорович",
                "id_10": "Андреевич"
            }
        }
    }`,


    professionJson: `{
        "male": {
            "count": 5,
            "list": {
                "id_1": "Слесарь",
                "id_2": "Солдат",
                "id_3": "Шахтер",
                "id_4": "Водитель",
                "id_5": "Инженер"
            }
        },
        "female": {
            "count": 5,
            "list": {
                "id_1": "Медсестра",
                "id_2": "Учительница",
                "id_3": "Кассир",
                "id_4": "Секретарь",
                "id_5": "Дизайнер"
            }
        }
    }`,

    monthsJson: `[
        {"month": "января", "days": 31},
        {"month": "февраля", "days": 28},
        {"month": "марта", "days": 31},
        {"month": "апреля", "days": 30},
        {"month": "мая", "days": 31},
        {"month": "июня", "days": 30},
        {"month": "июля", "days": 31},
        {"month": "августа", "days": 31},
        {"month": "сентября", "days": 30},
        {"month": "октября", "days": 31},
        {"month": "ноября", "days": 30},
        {"month": "декабря", "days": 31}
    ]`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: "Женщина",

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function(json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender: function() {
        return Math.random() > 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },


    randomFirstName: function(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
   
    randomSurname: function(gender) {
        const maleSurname = this.randomValue(this.surnameJson);

        if(gender === this.GENDER_FEMALE) {
            return maleSurname + 'а';
        } else {
            return maleSurname;
        }
    },

    randomMiddleName: function(gender) {
        const middleNameData = JSON.parse(this.middleNameJson);
        const maleMiddleName = this.randomValue(JSON.stringify(middleNameData.male));
        
        if (gender === this.GENDER_FEMALE) {
            return maleMiddleName.replace("ич", "на");
        } else {
            return maleMiddleName;
        }
    },

    randomBirthYear: function() {
        const minYear = 1970;
        const maxYear = 2005;

        return this.randomIntNumber(maxYear, minYear)
    },

    randomBirthDate: function() {
        // debugger
        const month = JSON.parse(this.monthsJson);
        const randomMonthIndex = this.randomIntNumber(month.length - 1, 0);
        const monthData = month[randomMonthIndex];
        const day = this.randomIntNumber(1, monthData.days);

        return `${day} ${monthData.month}` ;
    },

    randomProfession: function(gender) {
        const professionData = JSON.parse(this.professionJson);

        if (gender === this.GENDER_MALE) {
            return this.randomValue(JSON.stringify(professionData.male));
        } else {
            return this.randomValue(JSON.stringify(professionData.female));
        }

    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession(this.person.gender);
        // console.log(personGenerator);
        
        return this.person;
    }

}