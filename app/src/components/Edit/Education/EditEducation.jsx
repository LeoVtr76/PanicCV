import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function EditEducation({
  education,
  tempEducation,
  onEducationAdd,
  onEducationChanged,
  onEducationDelete,
}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="edit-card">
        <div className="edit-card-top">
          <span className="center">Edit Education</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </button>
        </div>
        {isOpen && (
          <>
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="card-education">
                  <div className="education-data">
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                    <span>{edu.place}</span>
                  </div>
                  <div className="education-description">
                    <span>{edu.school}</span>
                    <span>{edu.type}</span>
                  </div>
                  <button onClick={() => onEducationDelete(edu.id)}>X</button>
                </div>
              </div>
            ))}
            <span>Add Education</span>
            <div className="inputData">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={tempEducation.startDate}
                onChange={onEducationChanged}
              />
            </div>
            <div className="inputData">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={tempEducation.endDate}
                onChange={onEducationChanged}
              />
            </div>
            <div className="inputData">
              <label htmlFor="place">Enter City</label>
              <input
                type="text"
                name="place"
                id="place"
                value={tempEducation.place}
                onChange={onEducationChanged}
              />
            </div>
            <div className="inputData">
              <label htmlFor="school">Enter School</label>
              <input
                type="text"
                name="school"
                id="school"
                value={tempEducation.school}
                onChange={onEducationChanged}
              />
            </div>
            <div className="inputData">
              <label htmlFor="type">Enter Diplome</label>
              <input
                type="text"
                name="type"
                id="type"
                value={tempEducation.type}
                onChange={onEducationChanged}
              />
            </div>
            <button onClick={onEducationAdd}>Valider</button>
          </>
        )}
      </div>
    </>
  );
}
EditEducation.propTypes = {
  onPersonChanged: PropTypes.func.isRequired,
  education: PropTypes.any, //TODO: change to correct
  onEducationChanged: PropTypes.func.isRequired,
  onEducationAdd: PropTypes.func.isRequired,
  onEducationDelete: PropTypes.func.isRequired,
  tempEducation: PropTypes.any, //TODO :change to correct
};
export default EditEducation;
