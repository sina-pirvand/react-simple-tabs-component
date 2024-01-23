import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [isOpen, setIsOpen] = useState(true);
  const handleActiveTab = (id) => {
    setActiveTab(id);
  };
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        🔰
      </button>
      {isOpen ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  handleActiveTab(tab.id);
                }}
                className={activeTab === tab.id ? "active" : ""}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
          <div className="tab__content">{tabData[activeTab - 1].content}</div>
        </div>
      ) : (
        <p>Tab the button to open the menu</p>
      )}
    </div>
  );
};

export default App;
