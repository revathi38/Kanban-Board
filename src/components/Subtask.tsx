import { useDispatch, useSelector } from "react-redux";
import { SubTask } from "../global";
import { setSubTaskCompleted } from "../redux/boardsSlice";
import { RootState } from "../redux/store";

type SubTaskProps = {
  subtask: SubTask;
  columnId: string;
  taskId: string;
};

const Subtask = ({ subtask, columnId, taskId }: SubTaskProps) => {
  const disptch = useDispatch();
  const onChange = () => {
    disptch(setSubTaskCompleted({ columnId, taskId, subTaskId: subtask.id }));
  };

  const boards = useSelector((state: RootState) => state.boards);

  const board = boards.find((b) => b.isActive);
  const column = board?.columns.find((col) => col.id === columnId);
  const task = column?.tasks.find((t) => t.id === taskId);
  const subTask = task?.subtasks.find((sub) => sub.id === subtask.id);

  const checked = subTask?.isCompleted;

  return (
    <div className=" w-full flex hover:bg-[#635fc740] dark:hover:bg-[#635fc740] rounded-md relative items-center justify-start dark:bg-[#20212c]  p-3 gap-4  bg-[#f4f7fd]">
      <input
        className=" w-4 h-4  accent-[#635fc7] cursor-pointer "
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <p className={checked ? " line-through opacity-30 " : ""}>
        {subtask.title}
      </p>
    </div>
  );
};

export default Subtask;
