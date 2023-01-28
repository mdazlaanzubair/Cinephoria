import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
  // back to previous route
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-outline-secondary"
      onClick={() => {
        navigate(-1);
      }}
    >
      <i className="fas fa-long-arrow-alt-left me-2"></i> Go back
    </button>
  );
};

export default GoBackBtn;
