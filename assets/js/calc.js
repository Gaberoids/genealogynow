// Challenge from lesson
function whatCanIDrink(age) {
    if (1 <= age && age < 14) {
        return "Drink Toddy1";
    }
    else if (14 <= age && age < 18) {
        return "Drink Coke";
    }
    else if (18 <= age && age < 21) {
        return "Drink Beer";
    }
    else if (21 <= age && age < 130) {
        return "Drink Whisky";
    }
    else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
}