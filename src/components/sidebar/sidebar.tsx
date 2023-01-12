import "./sidebar.css";
const utilityType = ["String", "Date", "File", "General"];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span>Categories</span>
      </div>
      <div className="sidebar-body">
        <div className="category">
         {
          utilityType.map(element=>{
            return (
              <div className="category-option"><span>{element}</span></div>
            )
          })
         }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
