let day = "Monday";
let message;

switch (day) {
    case "Monday":
        message = "It's the start of the week.";
        break;
    case "Wednesday":
        message="It's a weekday.";
        break;
    case "Thursday":
        message="The weekend is almost here.";
        break;
    case "Friday":
        message = "It's finally Friday!";
        break;
    default:
        message="It's the weekend!";
}   
console.log(message);
