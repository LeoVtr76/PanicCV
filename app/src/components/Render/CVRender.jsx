import PropTypes from "prop-types";
import { forwardRef } from "react";
import Header from "./Header/Header";
import Education from "./Education/Education";
import Work from "./Work/Work";
const CVRender = forwardRef(({ person, education, work }, componentRef) => {
  return (
    <div className="content">
      <div ref={componentRef} className="card">
        <Header person={person} />
        <div className="content-center">
          {education.length !== 0 && <Education educations={education} />}
          {work.length !== 0 && <Work works={work} />}
        </div>
      </div>
    </div>
  );
});
CVRender.displayName = "CVRender";
CVRender.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  education: PropTypes.array.isRequired,
  work: PropTypes.array.isRequired,
  componentRef: PropTypes.any, //TODO: change to correct
};

export default CVRender;
