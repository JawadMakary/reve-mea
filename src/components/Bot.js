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

      message: "Hi {previousValue}, What are you looking for ? ",

      trigger: "issues",
    },

    {
      id: "issues",

      options: [
        {
          value: "Guides",

          label: "Guides",

          trigger: "Guides",
        },

        { value: "Investment Consultation", label: "Investment Consultation", trigger: "Investment Consultation" },
        { value: "Mortgage", label: "Mortgage", trigger: "Mortgage" },
        { value: "Investment Choices", label: "Investment Choices", trigger: "Investment Choices" },


      ],
    },

    {
      id: "Guides",

      message: "REVE MEA provides several plans that meets your needs. Sail into our guides section to select the project you're searching for ! https://www.revemea.com",

      end: true,
    },
    {
      id: "Mortgage",

      message: "Ensure a profitable return on investment. Calculate your mortgage with REVE to better understand your next steps and free up budget for other investments! https://www.reve.com ",

      end: true,
    },
    {
      id: "Investment Consultation",

      message: "Dreaming Big with REVE. For all your advisory, consultation and property updates, feel free to contact us! https://www.revemea.com",

      end: true,
    },
    {
      id: "Investment Choices",

      message: "Off-plan:Get the real deal. REVE's experience in the field is the key to make your investment count. https://www.revemea.com  \n Residential: Get your resident now with REVE and benefit from its profits. Book your consultation now. https://www.revemea.com   \n Commercial: Eyeing for a commercial property investment? REVE's skilled agents will help you to meet your needs. https://www.revemea.com  \n Holiday Homes: Evolve your holidays experience. Offering a wide range of choices to pick your favorite elite stay. https://www.revemea.com ",

      end: true,
    },


  ];
  return <ChatBot steps={steps} />;
};

export default Bot;
