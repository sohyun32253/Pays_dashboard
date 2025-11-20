import TotalIcon from "../assets/receipt_icon.svg";
import SuccessIcon from "../assets/paid_icon.svg";
import FailedIcon from "../assets/unpaid_icon.svg";
import CancelledIcon from "../assets/pending_icon.svg";

interface PaymentsCardUiProps {
  color: "blue" | "purple" | "orange" | "gray";
  value: number;
}

const colors = {
  blue: "bg-[#41C6FF]",
  purple: "bg-[#7F3DFF]",
  orange: "bg-[#FF7A00]",
  gray: "bg-[#9ca3af]",
};

const icons = {
  blue: TotalIcon,
  purple: SuccessIcon,
  orange: FailedIcon,
  gray: CancelledIcon
}

const titles = {
  blue: "Total",
  purple: "Success",
  orange: "Failed",
  gray: "Cancelled" 
}

export default function PaymentsCardUi({ color, value }: PaymentsCardUiProps) {
  return (
    <div className={`p-6 rounded-2xl w-[270px] h-[140px] justify-between ${colors[color]}`}>
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-white/20">
          <img className="w-10 h-10" src={icons[color]} />
        </div>

        <div className="text-white">
          <span className="text-[28px] font-bold">{value}</span>
          <div className="text-base">{titles[color]} Payments</div>
        </div>
      </div>
    </div>
  );
}

