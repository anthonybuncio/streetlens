import VideoList from "./VideoList";

const Sidebar = ({ list }) => {
  return (
    <aside className="flex flex-col w-1/5 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      {/* <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700"> */}
      <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">
        User Submitted Videos in Houston, Texas
      </h2>

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
