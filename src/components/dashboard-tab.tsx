export default function Tabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (id: string) => void;
}) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "transactions", label: "Transactions" },
  ];

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200
              ${
                activeTab === tab.id
                  ? "text-[#437D8E] border-b border-[#4B8B9F]"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
