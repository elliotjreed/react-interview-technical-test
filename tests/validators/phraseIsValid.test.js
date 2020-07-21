import React from 'react'

import { phraseIsValid } from '../../src/validators/phraseIsValid'

describe("phraseIsValid", () => {
  it("should return false when characters are not in list of allowed characters", () => {
    expect(phraseIsValid("AELRSTY", "COVID")).toBe(false);
  });

  it("should return true when characters are in list of allowed characters", () => {
    expect(phraseIsValid("AELRSTY", "STAY")).toBe(true);
  });

  it("should return true when characters are in list of allowed characters but in lower case", () => {
    expect(phraseIsValid("AELRSTY", "stay")).toBe(true);
  });

  it("should return true when characters are in list of allowed characters and includes spaces", () => {
    expect(phraseIsValid("AELRSTY", "S T A Y")).toBe(true);
  });

  it("should return false when 'STAY ALERT' is validated", () => {
    expect(phraseIsValid("AELRSTY", "STAY ALERT")).toBe(false);
  });

  it("should return false when 'stay alert' is validated", () => {
    expect(phraseIsValid("AELRSTY", "stay alert")).toBe(false);
  });
});
