import React from "react";
import { Form } from "./Form";

export const App = () => {
  return (
    <>
      <main className="section">
        <section className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h2 className="title section-title has-text-centered">
                Top Secret Government Slogan Validator
              </h2>

              <div className="content">
                <p className="mb-2">
                  The First Minister, Doris Bohnson, has suffered an unfortunate
                  keyboard malfunction. The only characters now available are a
                  space character and the letters: A, E, L, R, S, T, and Y.
                </p>

                <p className="mb-2">
                  As the Government's chief strategist is currently otherwise
                  engaged in Durham, a web application to check whether the
                  First Minister is able to type a potential new slogan to
                  replace the existing "Stay Alert" slogan has begun
                  development.
                </p>

                <p className="mb-2">
                  Matthew Footchicken MP, a Government minister with experience
                  in creating apps, has created this app. However, despite some
                  tests it does not work.
                </p>

                <p>The app should work in the following way:</p>
                <ol>
                  <li>The user inputs a phrase into the input box</li>
                  <li>
                    If the phrase only consists of the letters A, E, L, R, S, T,
                    Y, and a space the input box should have a green border and
                    the phrase should appear in the poster template
                  </li>
                  <li>
                    The phrase should not be case-sensitive, and the input
                    should be converted to uppercase when being shown in the
                    yellow poster box template
                  </li>
                  <li>
                    If the input box is empty or contains only spaces, the input
                    box should have a red border and the yellow poster box
                    template should be empty
                  </li>
                  <li>
                    If the phrase contains characters other than A, E, L, R, S,
                    T, Y, or a space, the input box should have a red border and
                    the yellow poster box template should be empty
                  </li>
                  <li>
                    If the phrase entered is the phrase "stay alert" (not case
                    sensitive) the input box border should be red and the yellow
                    poster box template should be empty.
                  </li>
                </ol>
              </div>
            </div>

            <Form />
          </div>
        </section>
      </main>
    </>
  );
};
