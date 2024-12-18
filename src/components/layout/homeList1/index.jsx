import React from "react";

const List = () => {
  return (
    <div>
      const items = ["Easy to Use", "Secure Platform", "24/7 Support",
      "Affordable Pricing"]; return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
      );
    </div>
  );
};

export default List;
