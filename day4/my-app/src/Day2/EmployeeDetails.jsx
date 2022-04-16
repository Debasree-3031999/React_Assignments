import Card from "./Card";

const data1 = {
  date: "28/10/2020",
  button: "Case-Study",
  headone: "Amazon Gift",
  headtwo: "Pay",
  headthree:"Desktop - Mobile",
  imgURL: "https://www.nicepng.com/png/full/286-2867534_amazon-amazon-logo-transparent-black.png",
};

const data2 = {
  date: "17 sep 2020",
  button: "Case-Study",
  headone: "Apple Gift",
  headtwo: "Payment",
  headthree:"MacOS - Mobile",
  imgURL: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
};

function EmployeeDetails() {
  return (
    // display a card with the given details
    <>
      <Card {...data1} />
      <Card {...data2} />
    </>
  );
}
export default EmployeeDetails;

// <img src= "" alt = "" />
