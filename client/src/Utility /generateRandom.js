//generating a randowm ID using math function

export const generateRandomID = () => {
  const idString =
    "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

  let id = "";

  for (let i = 0; i <= 6; i++) {
    const randomPosition = Math.floor(Math.random() * idString.length);

    id += idString[randomPosition];
  }

  return id;
};
