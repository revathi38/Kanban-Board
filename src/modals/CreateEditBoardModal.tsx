import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import crossIcon from "../assets/icon-cross.svg";

type CreateEditBoardModalProps = {
  setBoardOpen: (val: boolean) => void;
};

interface Column {
  name: string;
  tasks: Array<Task>;
  id: string;
}

interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: Array<SubTask>;
}

interface SubTask {
  title: string;
  isCompleted: boolean;
}

const CreateEditBoardModal = ({ setBoardOpen }: CreateEditBoardModalProps) => {
  const [newColumns, setNewColumns] = useState<Column[]>([
    { name: "Todo", tasks: [], id: uuidv4() },
    { name: "Doing", tasks: [], id: uuidv4() },
  ]);
  return (
    <div
      className="py-4 px-2 top-0 bottom-0 left-0 right-0 dropdown z-50 fixed flex justify-center items-center  scrollbar-hide"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setBoardOpen(false);
      }}
    >
      <div className="bg-white max-h-[95vh] w-full dark:bg-[#2b2c37] font-bold text-black dark:text-white p-8 rounded-xl shadow-md shadow-[#364e7e1a] max-w-md m-auto scrollbar-hide">
        <h3 className="text-lg">Add New Board</h3>

        {/* Board Name */}
        <div className="flex flex-col space-y-1 mt-8">
          <label
            htmlFor="board-name-input"
            className="text-sm text-gray-500 dark:text-white"
          >
            Board Name
          </label>
          <input
            id="board-name-input"
            type="text"
            placeholder="e.g Web Design"
            className="bg-transparent border-[0.5px] border-gray-600 px-4 py-2 rounded-md outline-1 focus:outline-[#635f67] ring-0"
          />
        </div>

        {/* Board colums */}
        <div className="flex flex-col space-y-3 mt-8">
          <label className="text-sm text-gray-500 dark:text-white">
            Board Columns
          </label>
          {newColumns.map((column: Column) => {
            return (
              <>
                <div className="flex items-center w-full">
                  <input
                    className="bg-transparent border-[0.5px] border-gray-600 px-4 py-2 rounded-md outline-[1px] focus:outline-[#635f67] flex-grow"
                    value={column.name}
                    type="text"
                  />
                  <img
                    src={crossIcon}
                    alt="cross icon"
                    className="m-4 cursor-pointer"
                  />
                </div>
              </>
            );
          })}
          <div className="flex flex-col gap-10 mt-10">
            <button
              className="rounded-full bg-[#635fc7] py-2 text-white hover:opacity-70 dark:text-[#635fc7] dark:bg-white"
              onClick={() => {
                setNewColumns((prevState) => [
                  ...prevState,
                  { name: "", tasks: [], id: uuidv4() },
                ]);
              }}
            >
              + Add New Column
            </button>
            <button className="rounded-full bg-[#635fc7] py-2 text-white hover:opacity-70 dark:text-[#635fc7] dark:bg-white">
              Create New Board
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditBoardModal;