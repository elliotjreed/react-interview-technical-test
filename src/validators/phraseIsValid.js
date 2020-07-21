export const phraseIsValid = (characters, stringToCheck) => {
  characters = characters.replace(" ", "").split("");
  const charactersInStringToCheck = stringToCheck.replace(" ", "").split("");

  charactersInStringToCheck.forEach((characterInStringToCheck) => {
    if (!characters.includes(characterInStringToCheck)) {
      return false;
    }
  })

  return true;
};
