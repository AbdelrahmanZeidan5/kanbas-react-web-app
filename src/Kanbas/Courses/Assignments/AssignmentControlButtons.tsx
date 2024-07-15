import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import "./index.css";

export default function AssignmentControlButtons() {
  return (
    <div className="d-flex align-items-center ms-auto">
      <span className="assignment-control-buttons-text me-2">40% of Total</span>
      <BsPlus className="me-3" />
      <IoEllipsisVertical className="fs-4" />
    </div>

  );
}
