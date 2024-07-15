function handleButton1() {
  const input1 = document.getElementById("input1").value;
  const number = parseInt(input1, 10); // Convert input to a number
  fetch("http://localhost:4000/isPrime", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number }),
  })
    .then((response) => response.json())
    .then((data) => {
      const output = document.getElementById("output");
      output.innerHTML = `Button 1 clicked with input: ${number}. Is prime: ${data.isPrime}`;
    })
    .catch((error) => {
      console.error("Error fetching data from backend:", error);
      const output = document.getElementById("output");
      output.innerHTML = "Error fetching data from backend.";
    });
}
function handleButton2() {
  const input2 = document.getElementById("input2").value;
  const numbers = input2.split(",").map(Number); // Convert comma-separated values to an array of numbers

  fetch("http://localhost:5000/sort", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ numbers }),
  })
    .then((response) => response.json())
    .then((data) => {
      const output = document.getElementById("output");
      output.innerHTML = `Button 2 clicked with input: ${numbers.join(
        ", "
      )}. Sorted result: ${data.sortedNumbers.join(", ")}`;
    })
    .catch((error) => {
      console.error("Error fetching data from backend:", error);
      const output = document.getElementById("output");
      output.innerHTML = "Error fetching data from backend.";
    });
}
