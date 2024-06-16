import PropTypes from "prop-types";
import EditProfile from "./Header/EditProfile";
import EditEducation from "./Education/EditEducation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import EditWork from "./Work/EditWork";
function EditCV({
  person,
  onPersonChanged,
  education,
  onEducationChanged,
  onEducationAdd,
  onEducationDelete,
  tempEducation,
  work,
  onWorkChanged,
  onWorkAdd,
  onWorkDelete,
  tempWork,
  onPrintClicked,
}) {
  return (
    <div className="edit-content">
      <div className="edit-content-top center">
        <button onClick={onPrintClicked}>
          {" "}
          <FontAwesomeIcon icon={faPrint} /> Print CV
        </button>
        <span>Edit your CV</span>
      </div>
      <div className="edit-content-data">
        <EditProfile person={person} onPersonChanged={onPersonChanged} />
        <EditEducation
          education={education}
          tempEducation={tempEducation}
          onEducationAdd={onEducationAdd}
          onEducationChanged={onEducationChanged}
          onEducationDelete={onEducationDelete}
        />
        <EditWork
          work={work}
          tempWork={tempWork}
          onWorkAdd={onWorkAdd}
          onWorkChanged={onWorkChanged}
          onWorkDelete={onWorkDelete}
        />
      </div>
    </div>
  );
}
EditCV.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  onPersonChanged: PropTypes.func.isRequired,
  education: PropTypes.any, //TODO: change to correct
  onEducationChanged: PropTypes.func.isRequired,
  onEducationAdd: PropTypes.func.isRequired,
  onEducationDelete: PropTypes.func.isRequired,
  tempEducation: PropTypes.any, //TODO :change to correct
  work: PropTypes.any, //TODO: change to correct
  onWorkChanged: PropTypes.func.isRequired,
  onWorkAdd: PropTypes.func.isRequired,
  onWorkDelete: PropTypes.func.isRequired,
  tempWork: PropTypes.any, //TODO :change to correct
  onPrintClicked: PropTypes.func.isRequired,
};
export default EditCV;
