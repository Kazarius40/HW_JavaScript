// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = filter.sort((a1, a2) => {
    return a1.id - a2.id;
});