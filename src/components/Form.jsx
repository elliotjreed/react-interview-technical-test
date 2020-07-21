import React, { useState } from "react";
import { YellowBox } from "./StayAlert";
import { phraseIsValid } from "../validators/phraseIsValid";

export const Form = () => {
  const [stringToCheck, setStringToCheck] = useState("");
  const [isValidPhrase, setIsValidPhrase] = useState(false);

  const handleInput = (event) => {
    if (phraseIsValid("AELRSTY", event.target.value)) {
      setStringToCheck(event.target.value);
      setIsValidPhrase(true);
    } else {
      setStringToCheck("");
      setIsValidPhrase(false);
    }
  };

  return (
    <>
      <div className="column is-6-tablet is-6-fullhd is-offset-3-tablet is-offset-3-fullhd">
        <div className="field">
          <div className="control">
            <input
              className={
                "input is-medium" +
                (isValidPhrase ? " is-success" : " is-danger")
              }
              placeholder="Potential slogan"
              onChange={handleInput}
              title="Potential very clear and precise slogan input."
            />
          </div>
        </div>
      </div>

      <div className="column is-6-tablet is-6-fullhd is-offset-3-tablet is-offset-3-fullhd">
        <YellowBox lineOne={stringToCheck} />
      </div>
    </>
  );
};
