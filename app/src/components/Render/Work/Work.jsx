import PropTypes from "prop-types";
function Work({ works }) {
  return (
    <div className="content-work">
      <div className="work-title">
        <span>Work</span>
      </div>
      {works.map((work, index) => (
        <div key={index}>
          <div className="card-work">
            <div className="work-data">
              <span>
                {work.startDate} - {work.endDate}
              </span>
              <span>{work.company}</span>
            </div>
            <div className="work-description">
              <span>{work.role}</span>
              <span>{work.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
Work.propTypes = {
  works: PropTypes.array.isRequired,
};
export default Work;
