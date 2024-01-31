import { useEffect, useState } from "react";
import axios from "axios";
const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const inputContainerStyle = {
  marginBottom: '16px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonContainerStyle = {
  textAlign: 'center',
};

const submitButtonStyle = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};


const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  fontSize: '24px',
  marginBottom: '8px',
};

const buttonContainer = {
  marginTop: '16px',
};

const buttonStyle = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '8px 16px',
  marginRight: '8px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
function App() {
  const [Name, setName] = useState(" ");
  const [des, setDes] = useState("description");
  const [intrest, setIntrest] = useState("your intrest");
  const [newName, setNewName] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/")
      .then((response) => {
        setNewName(response.data.response);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        console.error(error.response);
      });
  }, []);

  function changehandler(event) {
    setName(event.target.value);
  }
  function deshandler(event) {
    setDes(event.target.value);
  }
  function intresthandler(event) {
    setIntrest(event.target.value);
  }
  function add(event) {
    event.preventDefault();
    const newP = {
      Name: Name,
      Description: des,
      Intrest: intrest,
    };
    axios
      .post("http://localhost:3000/user/", newP)
      .then((response) => {
        console.log(response.data);
        console.log("hi there");
      })
      .catch((error) => {
        console.error("Error:", error.message); // Log the error message
        console.error(error.response); // Log the detailed response (if available)
      });
  }
  console.log(newName);
  return (
    <>
     <form onSubmit={add} style={formStyle}>
  <div style={inputContainerStyle}>
    Name: <input style={inputStyle} onChange={changehandler} />
  </div>
  <div style={inputContainerStyle}>
    Description: <input style={inputStyle} onChange={deshandler} />
  </div>
  <div style={inputContainerStyle}>
    Interest: <input style={inputStyle} onChange={intresthandler} />
  </div>
  <div style={buttonContainerStyle}>
    <button style={submitButtonStyle} type="submit">
      Submit
    </button>
  </div>
</form>


      <div>
      {newName.map((x) => (
    <div key={x.id} style={cardStyle}>
      <h1 style={titleStyle}>{x.Name}</h1>
      <p>{x.Description}</p>
      <p>{x.Intrest}</p>
      <span style={buttonContainer}>
        <button style={buttonStyle}>Twitter</button>
        <button style={buttonStyle}>LinkedIn</button>
      </span>
    </div>
  ))}
      </div>
    </>
  );
}

export default App;
