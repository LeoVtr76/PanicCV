import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function Header({ person }) {
  return (
    <div className="content-top">
      <div className="content-top-name">
        <span>{person.name}</span>
      </div>
      <div className="content-top-data">
        <span>
          {person.mail && <FontAwesomeIcon icon={faEnvelope} />}
          {person.mail}
        </span>
        <span>
          {person.phone && <FontAwesomeIcon icon={faPhone} />}
          {person.phone}
        </span>
        <span>
          {" "}
          {person.address && <FontAwesomeIcon icon={faMapMarkerAlt} />}
          {person.address}
        </span>
      </div>
    </div>
  );
}
Header.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
