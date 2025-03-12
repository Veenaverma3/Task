import React from "react";

const AddressForm = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      <h1 className=" text-teal-400 text-xl font-semibold underline ">-Enter Address manually-</h1>
      {["Address Line 1", "Address Line 2", "Address Line 3"].map((label, index) => (
        <div key={index}>
          <label className="text-gray-700 font-medium">{label}</label>
          <input type="text" className="p-2 border rounded w-full" />
        </div>
      ))}
      <div className="flex items-center mt-4">
        <input type="checkbox" id="unable-to-sign" className="w-5 h-5 text-teal-400 border-gray-300 rounded" />
        <label htmlFor="unable-to-sign" className="ml-2 text-gray-700">
          Unable to sign the LPA.
        </label>
      </div>
    </div>
  );
};

export default AddressForm;
