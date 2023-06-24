import LineChart from "../components/Chart";
import Search from "../components/Search";

const Dashboard = () => {
  return (
    <div>
      <div className="rounded-xl md:ml-9 pt-4 md:pt-[34px] md:pr-[110px] pr-4 bg-primary-700 pb-[34px] md:pl-[115px] pl-2 flex flex-col
	   gap-2.5 items-start justify-start relative overflow-hidden">
        <div className="flex flex-row md:gap-[262px] gap-5 items-end justify-start shrink-0 relative">
          <div className="flex flex-col gap-[3px] items-center justify-start shrink-0 relative">
            <div className="flex flex-col items-start justify-start shrink-0 relative">
			<div
                className="text-[#ffffff] text-left relative"
                style={{ font: "500 16px/36.49px 'Rubik', sans-serif" }}
              >
                Buyers
              </div>

              <div
                className="text-[#ffffff] text-left relative md:text-5xl text-4xl font-semibold"
                style={{
                  margin: "-5px 0 0 0" }}
              >
                300
              </div>
            </div>

            <div className="flex flex-row gap-1 items-end justify-start shrink-0 relative ">
              <div
                className="text-[#ffffff] text-left relative "
                style={{ font: "400 14px/15.49px 'Rubik', sans-serif" }}
              >
                This week
              </div>

              <div className="bg-[#ffffff] rounded-xl p-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 h-[15px] relative">
                <div
                  className="text-[#4caf50] text-left relative "
                  style={{ font: "500 8px/10px 'Rubik', sans-serif" }}
                >
                  +2.4%
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[3px] items-start justify-start shrink-0 relative">
            <div className="flex flex-col items-start justify-start shrink-0 relative">
              <div
                className="text-[#ffffff] text-left relative"
                style={{ font: "500 16px/36.49px 'Rubik', sans-serif" }}
              >
                Sellers
              </div>

              <div
                className="text-[#ffffff] text-left relative md:text-5xl text-4xl font-semibold"
                style={{
                  margin: "-5px 0 0 0",
                }}
              >
                4,000
              </div>
            </div>

            <div className="flex flex-row gap-1 items-end justify-start shrink-0 relative">
              <div
                className="text-[#ffffff] text-left relative"
                style={{ font: "400 14px/15.49px 'Rubik', sans-serif" }}
              >
                This week
              </div>

              <div className="bg-[#ffffff] rounded-xl p-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 h-[15px] relative">
                <div
                  className="text-[#ff0000] text-left relative"
                  style={{ font: "500 8px/10px 'Rubik', sans-serif" }}
                >
                  -2.2%
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[3px] items-start justify-start shrink-0 relative">
            <div className="flex flex-col items-start justify-start shrink-0 relative">
              <div
                className="text-[#ffffff] text-left relative"
                style={{ font: "500 16px/36.49px 'Rubik', sans-serif" }}
              >
                Truck Driver
              </div>

              <div
                className="text-[#ffffff] text-left relative md:text-5xl text-4xl font-semibold"
                style={{
                  margin: "-5px 0 0 0",
                }}
              >
                100
              </div>
            </div>

            <div className="flex flex-row gap-1 items-end justify-start shrink-0 relative">
              <div
                className="text-[#ffffff] text-left relative"
                style={{ font: "400 14px/15.49px 'Rubik', sans-serif" }}
              >
                This week
              </div>

              <div className="bg-[#ffffff] rounded-xl p-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 h-[15px] relative">
                <div
                  className="text-[#4caf50] text-left relative"
                  style={{ font: "500 8px/10px 'Rubik', sans-serif" }}
                >
                  +1.4%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Chartjs */}
      <div className="border-2  mt-8 md:ml-9 rounded-xl border-gray-400">
      <div className="flex justify-between items-center p-10">
                <p className="text-xl font-medium">Analytics</p>

                <div className="relative bg-gray-600 p-2 ">
    <input type="checkbox" id="sortbox" className="hidden absolute" />
    <label htmlFor="sortbox" className="flex items-center space-x-1 cursor-pointer">
    <span className="text-lg text-primary-700">Sort By</span>
    <svg className="h-4 w-4 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 9l-7 7-7-7" />
        </svg>
    </label>

        <div id="sortboxmenu" className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-600 border border-gray-400 transition delay-75 ease-in-out z-10">
        <ul className="block text-right text-gray-900">
            <li><a href="#" className="block px-3 py-2 hover:bg-gray-200">Month</a></li>
            <li><a href="#" className="block px-3 py-2 hover:bg-gray-200">Day</a></li>
            <li><a href="#" className="block px-3 py-2 hover:bg-gray-200">Week</a></li>
        </ul>
    </div>
</div>
                </div>
      <div className=" w-full md:h-[500px] flex md:justify-center justify-end mb-4">
      <LineChart />
      </div>
</div>
{/* Recent activities */}
          <div className="border-2 py-6 px-3  mt-8 md:ml-9 rounded-xl border-gray-400">
                <div className="flex justify-between">
                <h2>Recent Activities</h2>
                <Search />
                </div>

                {/* customer table */}
<section className=" md:px-4">
    <div className="flex flex-col justify-center h-full">
        {/* <!-- Table --> */}
        <div className="w-full mx-auto">

            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                            <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left"></div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left capitalize">Suppliers Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Suppliers Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left capitalize">Date Flagged</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center capitalize">Status</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" />
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                                                        <div className="font-medium text-gray-800">Alex Shatov</div>


                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">alexshatov@gmail.com</div>
                                                                   </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-left">12/06/2023</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                              <div className=" text-center bg-red-300 py-2 rounded-full">
                                <p className="text-red-200 md:text-lg">Flagged</p>
                              </div>
                              </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"/>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="font-medium text-gray-800">Philip Harbach</div>


                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">philip.h@gmail.com</div>

                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-left">12/06/2023</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                              <div className=" text-center bg-red-300 py-2 rounded-full">
                                <p className="text-red-200 md:text-lg">Flagged</p>
                              </div>
                              </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk" /></div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                                                        <div className="font-medium text-gray-800">Mirko Fisuk</div>


                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">mirkofisuk@gmail.com</div>
                                                                   </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-left">12/06/2023</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                              <div className=" text-center bg-red-300 py-2 rounded-full">
                                <p className="text-red-200 md:text-lg">Flagged</p>
                              </div>
                              </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo" /></div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                                                        <div className="font-medium text-gray-800">Olga Semklo</div>


                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">olga.s@cool.design</div>

                                </td>

                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-left">12/06/2023</div>
                                </td>

                                <td className="p-2 whitespace-nowrap">
                              <div className=" text-center bg-red-300 py-2 rounded-full">
                                <p className="text-red-200 md:text-lg">Flagged</p>
                              </div>
                              </td>

                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long" /></div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                                                        <div className="font-medium text-gray-800">Burak Long</div>


                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">longburak@gmail.com</div>
                                                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="md:text-lg text-left">12/06/2023</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                              <div className=" text-center bg-red-300 py-2 md:px-0 px-2 rounded-full">
                                <p className="text-red-200 md:text-lg">Flagged</p>
                              </div>
                              </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
          </div>


    </div>
  );
};
export default Dashboard;
