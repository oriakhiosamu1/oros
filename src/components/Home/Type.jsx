import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Backend Developer",
              "Java / Spring Boot Developer",
              "PHP / Laravel Developer",
              "Building Secure, Scalable APIs"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type