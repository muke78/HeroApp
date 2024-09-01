export const Icon = ({ icon, label }) => {
  return (
    <>
      <div className="d-flex align-items-center pe-2 ps-2">
        {icon}
        <span className="ps-3 pe-1">{label}</span>
      </div>
    </>
  );
};
