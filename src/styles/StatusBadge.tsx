interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const baseStyle =
    "px-4 py-2 rounded-full text-white text-sm font-medium inline-block";

  const statusStyle = {
    SUCCESS: "bg-violet-600",
    FAILED: "bg-orange-500",
    CANCELLED: "bg-gray-400",
    PENDING: "bg-yellow-500",
    ACTIVE: "bg-blue-500",
    INACTIVE: "bg-gray-300",
    READY:"bg-yellow-500",
    CLOSED: "bg-gray-600"
  }[status] || "bg-gray-500";

  return <span className={`${baseStyle} ${statusStyle}`}>{status}</span>;
}
