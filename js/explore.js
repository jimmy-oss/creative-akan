var year, month, dayOfMonth, dayOfWeek, day;
//Obtaining input
function getInput() {
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);
   

   
if (year == "" || year < 1980 || year >2000) {
    alert("Input the correct year");
    return false;
  } else if (month == "" || month < 1 || month > 12) {
    alert("Input the correct month");
    return false;
  } else if (dayOfMonth == "" || dayOfMonth < 1 || dayOfMonth > 31) {
    alert("input the correct date");
    return false;
  }
  
}
//Calculate func
function calculateDay() {
  getInput();
  dayOfWeek =  ((((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 8) -1 ;
  console.log(dayOfWeek); //Test the calculateDay function
  return (Math.floor(dayOfWeek));
}

//main caller function
function checkDayOfWeek() {
  day = calculateDay();
  checkGender();
  console.log("The function runs");//Test checkDayOfWeek function
}

// male arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

// female arrays
let femalesOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua", " Ama"];


//get selected radio button
function checkGender() {
  var gen = document.getElementsByName("genders");
  if (gen[0].checked == true) {
    var gender = "male";
  } else if (gen[1].checked == true) {
    var gender = "female";
  } else {
    console.log("pass");//Test the radio buttons
  }

  switch (gender) {
    case gender = "male":
      switch (day) {
        case (0 || -0):
          document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan birthday 🎂  is " + maleNames[0];
          break;
        case (1 || -1):
          document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan birthday 🎂  is " + maleNames[1];
          break;
        case (2 || -2):
          document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan birthday 🎂  is " + maleNames[2];
          break;
        case (3 || -3):
          document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan birthday 🎂  is " + maleNames[3];
          break;
        case (4 || -4):
          document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan birthday 🎂  is " + maleNames[4];
          break;
        case (5 || -5):
          document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan birthday 🎂  is " + maleNames[5];
          break;
        case (6 || -6):
          document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan birthday 🎂  is " + maleNames[6];
          break;
        default:
        // console.console.log("Pass");//Test male case
      }
      break;
    case gender = "female":
      switch (day) {
        case 0 || -0:
          document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan birthday 🎂  is  " + femaleNames[0] ;
          break;
        case 1 || -1:
          document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan birthday 🎂  is  " + femaleNames[1];
          break;
        case 2 || -2:
          document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan  birthday 🎂  is  " + femaleNames[2];
          break;
        case 3 || -3:
          document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan birthday 🎂  is " + femaleNames[3];
          break;
        case 4 || -4:
          document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan birthday 🎂  is " + femaleNames[4];
          break;
        case 5 || -5:
          document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan  birthday 🎂  is " + femaleNames[5];
          break;
        case 6 || -6:
          document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan birthday 🎂  is " + femaleNames[6];
          break;
      }
      break
    default:
      console.log("pass");//Test gender switch

  }
}