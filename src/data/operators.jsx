// This array comes from backend

const addition = {
  id: "addition",
  value: "left, right => left + right",
  html: <div
    id="addition"
    style={{
      display: "flex",
      "flexDirection": "row"
    }}
  >
    <div>ℤ</div>
    <div>+</div>
    <div>ℤ</div> 
  </div>
}

const subtraction = {
  id: "subtraction",
  value: "left, right => left - right",
  html: <div
    id="subtraction"
    style={{
      display: "flex",
      "flexDirection": "row"
    }}
  >
    <div>ℤ</div>
    <div>-</div>
    <div>ℤ</div> 
  </div>
}



const ops = [
  addition,
  subtraction
];

export default ops;
