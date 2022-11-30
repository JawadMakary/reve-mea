import React from "react";
import ChatBot from "react-simple-chatbot";
const Bot = () => {
  const steps = [
    {
      id: "Greet",

      message: "Hello, Welcome to Reve MEA",

      trigger: "Done",
    },

    {
      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",
    },

    {
      id: "waiting1",

      user: true,

      trigger: "Name",
    },

    {
      id: "Name",

      message: "Hi {previousValue}, Please select your Interest",

      trigger: "issues",
    },

    {
      id: "issues",

      options: [
        {
          value: "Off-Plan",

          label: "Off-Plan",

          trigger: "Off-Plan",
        },

        { value: "Holiday Home", label: "Holiday Home", trigger: "Holiday Home" },
        { value: "Residential", label: "Residential", trigger: "Residential" },

      ],
    },

    {
      id: "Off-Plan",

      message: "Please Check The off plan information",

      end: true,
    },
    {
      id: "Residential",

      message: "Please Check The Residential page ",

      end: true,
    },
    {
        id: "Holiday Home",
  
        message: "Please Check The holiday page ",
  
        end: true,
      },
  

  ];
  return <ChatBot steps={steps} />;
};

export default Bot;
