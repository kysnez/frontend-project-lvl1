import readlineSync from "readline-sync";

export const getUserName = () => {
  const name = readlineSync.question("Your name: ");

  console.log(`Hello, ${name}!`);
};

//  export default getUserName;
