import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import { useState } from "react";
import { RootState } from "../redux/store";
import { Board } from "../global";
import Column from "./Column";
import CreateEditBoardModal from "../modals/CreateEditBoardModal";
import useWindowSize from "../hooks/useWindowSize";

type HomeProps = {
  setBoardOpen: (val: boolean) => void;
};

const Home = ({ setBoardOpen }: HomeProps) => {
  const { width } = useWindowSize();

  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  const boards: Board[] = useSelector((state: RootState) => state.boards);

  const board = boards.find((b) => b.isActive === true);

  const columns = board?.columns ?? [];
  // console.log(columns);

  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  const openEditModal = () => {
    setIsBoardModalOpen(true);
  };

  return (
    <div
      className={`bg-[#f4f7fd] h-screen dark:bg-[#20212c] overflow-x-scroll flex ${
        width >= 768 && isSideBarOpen ? "ml-[261px]" : ""
      } `}
    >
      {width >= 768 && (
        <SideBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          setBoardOpen={setBoardOpen}
        />
      )}
      {columns?.length > 0 ? (
        <>
          {columns?.map((col, index) => {
            return <Column key={col.id} col={col} colIndex={index} />;
          })}

          <div
            className="h-screen dark:bg-[#2b2c3740] flex justify-center items-center font-bold text-2xl hover:text-[#635FC7] transition duration-300 cursor-pointer bg-[#E9EFFA] scrollbar-hide mb-2 mx-5 pt-[90px] min-w-[280px] text-[#828f83] mt-[135px] rounded-lg "
            onClick={openEditModal}
          >
            + New Column
          </div>
        </>
      ) : (
        <></>
      )}

      {isBoardModalOpen && (
        <CreateEditBoardModal
          boardType="edit"
          setBoardOpen={setIsBoardModalOpen}
        />
      )}
    </div>
  );
};

export default Home;
