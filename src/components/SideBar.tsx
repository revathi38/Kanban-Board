import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Board } from "../global";
import boardIcon from "../assets/icon-board.svg";
import lightIcon from "../assets/icon-light-theme.svg";
import darkIcon from "../assets/icon-dark-theme.svg";

const SideBar = () => {
  const boards = useSelector((state: RootState) => state.boards);
  return (
    <div className="min-w-[261px] bg-white dark:bg-[#2b2c37] top-[72px] fixed left-0 h-screen">
      <div className=" bg-white  dark:bg-[#2b2c37]    w-full   py-4 rounded-xl">
        <h3 className="dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8">
          ALL BOARDS ({boards.length})
        </h3>
        <div>
          {boards.map((board: Board) => {
            return (
              <div
                key={board.id}
                className={` flex items-baseline space-x-2 px-5 mr-8 rounded-r-full duration-500 ease-in-out py-4 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] dark:hover:bg-white dark:hover:text-[#635fc7] dark:text-white  ${
                  board.isActive &&
                  " bg-[#635fc7] rounded-r-full text-white mr-8 "
                } `}
              >
                <img src={boardIcon} className="  filter-white  h-4 " />{" "}
                <p className=" text-lg font-bold ">{board.name}</p>
              </div>
            );
          })}
          <div className=" flex  items-baseline space-x-2 mr-8 rounded-r-full duration-500 ease-in-out cursor-pointer text-[#635fc7] px-5 py-4 hover:bg-[#635fc71a] hover:text-[#635fc7] dark:hover:bg-white  ">
            <img src={boardIcon} className="filter-white h-4" />
            <p className=" text-lg font-bold">Create New Board </p>
          </div>
        </div>
        <div className=" mx-2  p-4 relative space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg">
          <img src={lightIcon} alt="sun indicating light mode" />
          

          <img src={darkIcon} alt="moon indicating dark mode" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
