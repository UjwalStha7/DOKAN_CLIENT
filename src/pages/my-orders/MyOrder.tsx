import { useEffect, useState } from "react"
import Navbar from "../../globals/components/Navbar"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchMyOrders, updateOrderStatusinSlice } from "../../store/checkoutSlice"
import { Link } from "react-router-dom"
import { socket } from "../../App"
import search from "../../media/search.png"

// Helper function to handle status styling dynamically
const getStatusStyles = (status: string) => {
  switch (status?.toLowerCase()) {
    case "pending":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";
    case "preparation":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "ontheway":
      return "bg-indigo-50 text-indigo-900 border-indigo-300";
    case "delivered":
      return "bg-green-50 text-green-700 border-green-200";
    case "cancelled":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
  }
};

// Helper function to handle payment method badge styling dynamically
const getPaymentStyles = (method: string) => {
  switch (method?.toLowerCase()) {
    case "esewa":
      // Light green background (10% opacity), brand color text, 30% opacity border
      return "bg-[#2aac04] text-[#ffffff]";
    case "khalti":
      // Light red/brand background, brand color text, 30% opacity border
      return "bg-[#dc0019] text-[#ffffff]";
    case "cod":
    case "cash on delivery":
      // A nice distinct teal badge for COD
      return "bg-teal-900 text-[#ffffff]"; 
    default:
      return "bg-slate-900 text-[#ffffff]";
  }
};

function MyOrder() {
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((store) => store.orders)
  const [searchTerm, setSearchTerm] = useState<string>("")
  console.log(searchTerm)

  const newItems = items.filter((item) => 
    item.id.toLowerCase().includes(searchTerm) || 
    item.orderStatus?.toLowerCase().includes(searchTerm) || 
    item.Payment?.paymentMethod.toLowerCase().includes(searchTerm) || 
    item.totalAmount == parseInt(searchTerm)
  )
  console.log(newItems)

  useEffect(() => {
    dispatch(fetchMyOrders())
  }, [dispatch])

  useEffect(() => {
    socket.on("statusUpdated", (data: any) => {
      console.log(data, "Incoming data")
      dispatch(updateOrderStatusinSlice(data))
    })
    
    // It's good practice to cleanup the socket listener
    return () => {
      socket.off("statusUpdated")
    }
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className="mx-10"> {/* Adjusted margin for better mobile view */}
        <div className="w-full flex flex-col sm:flex-row justify-between mb-3 mt-1 pl-3 items-start sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Shopping Cart</h3>
            <p className="text-slate-500">Review your selected items.</p>
          </div>
          {/* Added w-full and mt-3 for mobile, sm:w-auto and sm:mt-0 for desktop */}
          <div className="w-full sm:w-auto mt-3 sm:mt-0">
            {/* Replaced invalid min-w-50 with responsive max widths */}
            <div className="w-full sm:max-w-lg relative">
              <div className="relative">
                <input 
                  className="w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md" 
                  placeholder="Search..." 
                  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} 
                />
                <button className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded" type="button">
                  <img src={search} alt="Search" className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative flex flex-col w-full h-full overflow-x-auto overflow-y-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-50">
                <th className="p-4 text-sm font-normal leading-none text-slate-500">Order Id</th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">Order Status</th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">Total Amount</th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {
                newItems.length > 0 && newItems.map((item) => {
                  return (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="p-4 border-b border-slate-200 py-5">
                        <Link to={`/my-orders/${item.id}`}>
                          <p className="block font-semibold text-sm text-slate-800">{item.id}</p>
                        </Link>
                      </td>
                      <td className="p-4 border-b border-slate-200 py-5">
                        {/* Order Status Badge */}
                       <span className={`px-3 py-1 text-xs font-medium border rounded-full inline-flex items-center gap-1.5 ${getStatusStyles(item.orderStatus as string)}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75"></span>
                          {item.orderStatus ? item.orderStatus.charAt(0).toUpperCase() + item.orderStatus.slice(1).toLowerCase() : "Unknown"}
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200 py-5">
                        <p className="text-sm text-slate-500">
                          Rs. {item.totalAmount}
                        </p>
                      </td>
                      <td className="p-4 border-b border-slate-200 py-5">
                        {/* Payment Method Badge */}
                        <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getPaymentStyles(item.Payment?.paymentMethod as string)}`}>
                          {item.Payment?.paymentMethod ? item.Payment.paymentMethod.toUpperCase() : "N/A"}
                        </span>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MyOrder