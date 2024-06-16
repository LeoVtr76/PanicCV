import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function EditProfile({ person, onPersonChanged }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="edit-card">
      <div className="edit-card-top">
        <span className="center">Edit Profile</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </button>
      </div>
      {isOpen && (
        <div>
          <div className="inputData">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={person.name}
              onChange={onPersonChanged}
            />
          </div>
          <div className="inputData">
            <label htmlFor="mail">E-Mail</label>
            <input
              type="text"
              name="mail"
              id="mail"
              value={person.mail}
              onChange={onPersonChanged}
            />
          </div>
          <div className="inputData">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={person.address}
              onChange={onPersonChanged}
            />
          </div>
          <div className="inputData">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={person.phone}
              onChange={onPersonChanged}
            />
          </div>
        </div>
      )}
    </div>
  );
}
EditProfile.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  onPersonChanged: PropTypes.func.isRequired,
};
export default EditProfile;
