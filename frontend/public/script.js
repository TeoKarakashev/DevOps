function handleIsPrime() {
  const input1 = document.getElementById("input1").value;
  const number = parseInt(input1, 10); // Convert input to a number
  const isPrimeUrl = "http://34.116.129.149:80/isPrime";

  fetch(isPrimeUrl, {
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
function handleSortArray() {
  const input2 = document.getElementById("input2").value;
  const numbers = input2.split(",").map(Number); // Convert comma-separated values to an array of numbers
  const sortUrl = "http://34.116.133.96:80/sort";
  fetch(sortUrl, {
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
