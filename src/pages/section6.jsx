import React, { useState } from "react";

const Section6 = () => {
  // Define the items array
  const [list, setList] = useState([
    {
      id: 1,
      word: "AI-Powered Resume Screening",
      details: [
        "Automate resume screening, streamline video interviews, assess skills, and engage candidates with powerful recruitment tools.",
      ],
      isOpen: true,
    },
    {
      id: 2,
      word: "Video Interview Integration",
      details: [""],
      isOpen: false,
    },
    {
      id: 3,
      word: "Candidate Sourcing and Job posting",
      details: [""],
      isOpen: false,
    },
    {
      id: 4,
      word: "Skill Testing and Assessment Integration",
      details: [""],
      isOpen: false,
    },
  ]);

  // Function to handle toggle
  const toggleItem = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div>
      <ul className="p-2 text-lg mt-2">
        {list.map((item) => (
          <li key={item.id} className="mb-6">
            <div className="flex text-center cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              {/* Custom icon for the main item */}
              <span className="m-2">
              </span>
              <span>{item.word}</span>
              <span className="ml-1">
                {item.isOpen ? "🔽" : "▶️"}
              </span>
            </div>
            {item.isOpen && (
              <ul className="mt-3">
                {item.details.map((detail, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Custom icon for nested items */}
                    <span style={{ marginRight: "10px", color: "#f00" }}>
                      ⭐
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section6;
