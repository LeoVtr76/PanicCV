import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function EditWork({ work, tempWork, onWorkAdd, onWorkChanged, onWorkDelete }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="edit-card">
        <div className="edit-card-top">
          <span className="center">Edit Work</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </button>
        </div>
        {isOpen && (
          <>
            {work.map((element) => (
              <div key={element.id}>
                <div className="card-education">
                  <div className="education-data">
                    <span>
                      {element.startDate} - {element.endDate}
                    </span>
                    <span>{element.place}</span>
                  </div>
                  <div className="education-description">
                    <span>{element.school}</span>
                    <span>{element.type}</span>
                  </div>
                  <button onClick={() => onWorkDelete(element.id)}>X</button>
                </div>
              </div>
            ))}
            <span>Add Work</span>
            <div className="inputData">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={tempWork.startDate}
                onChange={onWorkChanged}
              />
            </div>
            <div className="inputData">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={tempWork.endDate}
                onChange={onWorkChanged}
              />
            </div>
            <div className="inputData">
              <label htmlFor="role">Enter Role</label>
              <input
                type="text"
                name="role"
                id="role"
                value={tempWork.role}
                onChange={onWorkChanged}
              />
            </div>
            <div className="inputData">
              <label htmlFor="company">Enter Company</label>
              <input
                type="text"
                name="company"
                id="company"
                value={tempWork.company}
                onChange={onWorkChanged}
              />
            </div>
            <div className="inputData">
              <label htmlFor="type">Enter Description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={tempWork.description}
                onChange={onWorkChanged}
              />
            </div>
            <div className="validateButton">
              <button onClick={onWorkAdd}>Valider</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
EditWork.propTypes = {
  work: PropTypes.any, //TODO: change to correct
  onWorkChanged: PropTypes.func.isRequired,
  onWorkAdd: PropTypes.func.isRequired,
  onWorkDelete: PropTypes.func.isRequired,
  tempWork: PropTypes.any, //TODO :change to correct
};
export default EditWork;
