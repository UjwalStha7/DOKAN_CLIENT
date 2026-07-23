
import Navbar from "../../globals/components/Navbar";
import dob from "../../media/dob.png"
import profile from "../../media/profile.png"

function MyProfile() {
  return (
    <>
    <Navbar />
    <div className="w-full max-w-4xl mx-auto p-8 font-sans bg-white border border-gray-100 rounded-xl shadow-sm">
      
      {/* Header Section */}
      <div className="mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-medium text-gray-800">Personal Information</h2>
      </div>

      {/* Profile Picture & Actions */}
      <div className="flex items-center gap-5 mb-8">
        <div className="w-25 h-25 rounded-full overflow-hidden bg-pink-50 flex items-center justify-center shadow-inner">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 bg-[#4fc09a] text-white rounded-full font-medium text-sm hover:bg-[#23a479] transition-colors">
            Upload
          </button>
          <button className="px-6 py-2.5 bg-white text-[#f17a7a] border border-[#f17a7a] rounded-full font-medium text-sm hover:bg-[#da1414] hover:text-white transition-colors">
            Remove
          </button>
        </div>
      </div>

      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* First Name */}
        <div>
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            First Name <span className="text-[#f17a7a]">*</span>
          </label>
          <input
            type="text"
            defaultValue="Hari"
            className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            Last Name <span className="text-[#f17a7a]">*</span>
          </label>
          <input
            type="text"
            defaultValue="Neupane"
            className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            Email <span className="text-[#f17a7a]">*</span>
          </label>
          <input
            type="email"
            defaultValue="example@gmail.com"
            className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
          />
        </div>

        {/* Date of Birth */}
        <div className="md:col-span-2">
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            Date of Birth <span className="text-[#f17a7a]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <img src={dob} className="h-5 w-5" alt="" />
            </div>
            <input
              type="text"
              defaultValue="17 January 1991"
              className="w-full pl-11 pr-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="md:col-span-2">
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            Phone Number <span className="text-[#f17a7a]">*</span>
          </label>
          <input
            type="tel"
            defaultValue="+9779840363856"
            className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            Address <span className="text-[#f17a7a]">*</span>
          </label>
          <input
            type="text"
            defaultValue="SundarMarga-6, Chippledhunga"
            className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            City <span className="text-[#f17a7a]">*</span>
          </label>
          <input
            type="text"
            defaultValue="Pokhara"
            className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            State <span className="text-[#f17a7a]">*</span>
          </label>
          <input
            type="text"
            defaultValue="Gandaki Province"
            className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
          />
        </div>

        {/* Zip Code */}
        <div className="md:col-span-2">
          <label className="block text-[15px] font-medium text-gray-800 mb-2">
            Zip Code <span className="text-[#f17a7a]">*</span>
          </label>
          <input
            type="text"
            defaultValue="33700"
            className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-gray-200 outline-none text-gray-700"
          />
        </div>

      </div>
    </div>
    </>
  );
}

export default MyProfile;