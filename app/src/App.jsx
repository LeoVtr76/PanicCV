import { useState } from "react";
import { useRef } from "react";
import CVRender from "./components/Render/CVRender";
import EditCV from "./components/Edit/EditCV";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useReactToPrint } from "react-to-print";

function App() {
  const componentRef = useRef();
  //Person
  const [person, setPerson] = useState({
    name: "",
    mail: "",
    phone: "",
    address: "",
  });
  const handlePersonChanged = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
    console.log();
  };
  //Education
  const [education, setEducation] = useState([]);
  const [tempEducation, setTempEducation] = useState({
    startDate: "",
    endDate: "",
    place: "",
    school: "",
    type: "",
  });
  const handleEducationAdd = () => {
    const newEducation = {
      id: uuidv4(),
      ...tempEducation,
    };
    setEducation((prevEducation) => [...prevEducation, newEducation]);
    setTempEducation({
      startDate: "",
      endDate: "",
      place: "",
      school: "",
      type: "",
    });
  };

  const handleEducationChanged = (e) => {
    setTempEducation({ ...tempEducation, [e.target.name]: e.target.value });
  };
  const handleEducationDelete = (i) => {
    setEducation((prevEducation) => {
      return prevEducation.filter((edu) => edu.id !== i);
    });
    console.log(education);
  };
  //work
  const [work, setWork] = useState([]);
  const [tempWork, setTempWork] = useState({
    startDate: "",
    endDate: "",
    role: "",
    company: "",
    description: "",
  });
  const handleWorkAdd = () => {
    const newWork = {
      id: uuidv4(),
      ...tempWork,
    };
    setWork((prevWork) => [...prevWork, newWork]);
    setTempEducation({
      startDate: "",
      endDate: "",
      role: "",
      company: "",
      description: "",
    });
  };
  const handleWorkChanged = (e) => {
    setTempWork({ ...tempWork, [e.target.name]: e.target.value });
  };
  const handleWorkDelete = (i) => {
    setWork((prevWork) => {
      return prevWork.filter((element) => element.id !== i);
    });
    console.log(education);
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="top">
        <h1 className="center">PanicCV</h1>
        <h2 className="center">Create and Print Your Resume in 2 Minutes!</h2>
      </div>
      <div className="container">
        <EditCV
          person={person}
          onPersonChanged={handlePersonChanged}
          education={education}
          onEducationChanged={handleEducationChanged}
          onEducationAdd={handleEducationAdd}
          onEducationDelete={handleEducationDelete}
          tempEducation={tempEducation}
          work={work}
          onWorkChanged={handleWorkChanged}
          onWorkAdd={handleWorkAdd}
          onWorkDelete={handleWorkDelete}
          tempWork={tempWork}
          onPrintClicked={handlePrint}
        />
        <CVRender
          ref={componentRef}
          person={person}
          education={education}
          work={work}
        />
      </div>
      <footer>
        Design inspired by{" "}
        <a href="https://sharkri.github.io/cv-application/">Shark</a>
      </footer>
    </>
  );
}

export default App;
