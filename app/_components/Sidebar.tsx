import Search from "./Search";
import VideoList from "./VideoList";

const Sidebar = ({ list }) => {
  return (
    <aside className="flex flex-col w-1/3 md:w-1/5 h-screen px-4 overflow-y-auto bg-stone-950 text-white">
      {/* <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700"> */}
      <h2 className="my-4 text-sm font-medium">
        User Submitted Videos in Houston, Texas
      </h2>
      <Search />
      <div className="mt-8 space-y-4">
        {list.map((item) => {
          return (
            <div
              // onClick={() => {
              //   setSelectedItem(item);
              //   setIsOpen(true);
              // }}
              key={item._id}
            >
              <VideoList itemData={item} />
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </aside>
  );
};
export default Sidebar;
