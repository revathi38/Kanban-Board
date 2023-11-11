import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import crossIcon from "../assets/icon-cross.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {
  setIsOpenTaskModel: (val: boolean) => void;
};

const CreateEditTaskModel = ({ setIsOpenTaskModel }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [subtasks, setSubtasks] = useState([
    { title: "", isCompleted: false, id: uuidv4() },
    { title: "", isCompleted: false, id: uuidv4() },
  ]);

  const board = useSelector((state: RootState) => state.boards).find(
    (board) => board.isActive
  );

  const columns = board?.columns ?? [];

  return (
    <div
      className="absolute h-full w-full dropdown flex justify-center items-center "
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsOpenTaskModel(false);
      }}
    >
      <div className="bg-white max-h-[95vh] w-full dark:bg-[#2b2c37] font-bold text-black dark:text-white p-8 rounded-xl shadow-md shadow-[#364e7e1a] max-w-md m-auto scrollbar-hide overflow-y-scroll ">
        <h3 className="text-lg">Add New Task</h3>
        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm dark:text-white text-gray-500">
            Task Name
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="task-name-input"
            type="text"
            className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
            placeholder=" e.g Take coffee break"
          />
        </div>

        {/* Description */}
        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm dark:text-white text-gray-500">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="task-description-input"
            className=" bg-transparent outline-none min-h-[200px] focus:border-0 px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px] "
            placeholder="e.g. It's always good to take a break. This 
            15 minute break will  recharge the batteries 
            a little."
          />
        </div>

        <div className="mt-8 flex flex-col space-y-3">
          <label className="  text-sm dark:text-white text-gray-500">
            Subtasks
          </label>

          {subtasks.map((subtask, index) => (
            <div key={index} className=" flex items-center w-full ">
              <input
                onChange={() => {
                  // onChangeSubtasks(subtask.id, e.target.value);
                }}
                type="text"
                value={subtask.title}
                className=" bg-transparent outline-none focus:border-0 flex-grow px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px]  "
                placeholder=" e.g Take coffee break"
              />
              <img
                src={crossIcon}
                onClick={() => {
                  // onDelete(subtask.id);
                }}
                className=" m-4 cursor-pointer "
              />
            </div>
          ))}

          <button
            className=" w-full items-center dark:text-[#635fc7] dark:bg-white  text-white bg-[#635fc7] py-2 rounded-full "
            onClick={() => {
              setSubtasks((state) => [
                ...state,
                { title: "", isCompleted: false, id: uuidv4() },
              ]);
            }}
          >
            + Add New Subtask
          </button>
        </div>
        <div className="mt-8 flex flex-col space-y-3">
          <label className="  text-sm dark:text-white text-gray-500">
            Current Status
          </label>
          <select
            value={status}
            // onChange={onChangeStatus}
            className=" select-status flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0  border-[1px] border-gray-300 focus:outline-[#635fc7] outline-none"
          >
            {columns.map((column, index) => (
              <option key={index}>{column.name}</option>
            ))}
          </select>
          <button
            onClick={() => {
              // const isValid = validate();
              // if (isValid) {
              //   onSubmit(type);
              //   setIsAddTaskModalOpen(false);
              //   type === "edit" && setIsTaskModalOpen(false);
              // }
            }}
            className=" w-full items-center text-white bg-[#635fc7] py-2 rounded-full "
          >
            {/* {type === "edit" ? " save edit" : "Create task"} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEditTaskModel;
