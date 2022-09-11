import "./newUser.css";
import { useState } from "react";

export default function NewUser({onAddEmp}) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [staffId, setStaffId] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDeparment] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAddEmp({name,email,staffId,age,phone,department,gender,grade,status})


    setUsername('');
    setName('');
    setEmail('');
    setStaffId('');
    setAge('');
    setPhone('');
    setDeparment('');
    setGender('');
    setGrade('');
    setStatus('')
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Employee</h1>
      <form className="newUserForm" onSubmit={onSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Jsmith"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
           />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Staff Id</label>
          <input type="text" placeholder="Mce23232" 
          value={staffId}
          onChange={(e) => setStaffId(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input type="number" placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Department</label>
          <input type="text" placeholder="Engineering"
          value={department}
          onChange={(e) => setDeparment(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Grade</label>
          <select className="newUserSelect" 
           value={grade}
            onChange={(e) => setGrade(e.target.value)}>
            <option value=""></option>
            <option value="Officer">Officer</option>
            <option value="FrontLine Manager">FrontLine Manager</option>
            <option value="Middle Management">Middle Management</option>
            <option value="Senior Management">Senior Management</option>
            <option value="Director">Director</option>
            <option value="CEO">CEO</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
         
            {/* <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label> */}
            <select className="newUserSelect"
            value={gender}
            onChange={(e) => setGender(e.target.value)} >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active"
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
            <option value=""></option>
            <option value="Active">Yes</option>
            <option value="Inactive">No</option>
          </select>
        </div>

        <input type='submit' value='Create' className="newUserButton" />

        {/* <button className="newUserButton">Create</button> */}
      </form>
    </div>
  );
}