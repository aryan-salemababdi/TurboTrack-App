"use client";

const StatCard = ({
  icon,
  title,
  value
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-4">
      <div className="p-3 bg-gray-200 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;