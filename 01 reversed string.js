

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (error) {
    console.log(error.message);
  } finally{
    console.log(s);
  }
}


reverseString(420);
reverseString("Farad");
