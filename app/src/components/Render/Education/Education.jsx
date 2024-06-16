import PropTypes from "prop-types";
function Education({ educations }) {
  return (
    <div className="content-education">
      <div className="education-title">
        <span>Education</span>
      </div>
      {educations.map((edu) => (
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
          </div>
        </div>
      ))}
    </div>
  );
}
Education.propTypes = {
  educations: PropTypes.array.isRequired,
};
export default Education;
