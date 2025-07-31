import NavBar from "../Navbar/index";

import { CircleCheck, Circle, Clock3, Calendar, Plus } from "lucide-react";
import TodoStats from "../../components/TodoStats";
import DropDownMenu from "../../components/DropDownMenu";
import Model from "../../components/Model";
import { useState } from "react";

const DashboardPage = () => {
  const [showModel,setShowModel] = useState(false)
  return (
    <>
     {showModel && <Model setShowModel={setShowModel} />} 
      <NavBar />
      <div className="flex flex-row gap-6 mt-4 justify-center">
      <TodoStats
          title="Total Tasks"
          count={0} 
          Icon={<Circle className="text-primary" />}
          color="text-primary"
        />
          <TodoStats
          title="Completed"
          count={0} 
          Icon={<CircleCheck className="text-green" />}
          color="text-green"
        />
          <TodoStats
          title="Pending"
          count={0} 
          Icon={<Clock3 className="text-orange" />}
          color="text-orange"
        />
          <TodoStats
          title="High Priority"
          count={0} 
          Icon={<Calendar className="text-red" />}
          color="text-red"
        />
  
      </div>
      <section className="flex justify-between items-center mt-6 mb-6 px-4 w-full">
      <DropDownMenu
              options={["All Tasks", "Pending", "Completed", "High Priority"]}
              onOptionChose={(option) => console.log(option)}
      />
            <button onClick={()=>{
              setShowModel(true);
            }} className="text-white bg-black rounded-lg px-4 py-2 flex justify-space-between items-center gap-2 hover:opacity-70 transition-all duration-700">
              <Plus />
              Add Task
            </button>
      </section>
  
    </>
  );
};
export default DashboardPage;
