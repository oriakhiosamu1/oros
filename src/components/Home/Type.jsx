import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "PHP/Laravel Developer",
              "Mobile Application developer",
              "Passionate Penetration Tester",
              "Offer your platform the best security"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type