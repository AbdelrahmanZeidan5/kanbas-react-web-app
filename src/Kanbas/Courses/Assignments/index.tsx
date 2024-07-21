import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegEdit } from "react-icons/fa";
import * as db from "../../Database";
import { useParams } from "react-router";


export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br /><br /><br />
      
        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gra">

            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="dropdown-toggle me-1"></span>
                ASSIGNMENTS
              </div>
              <AssignmentControlButtons />
            </div>

            <ul className="wd-assignment-items list-group rounded-0">
              {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
                <li className="wd-assignment-item list-group-item d-flex align-items-center p-3 ps-1">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaRegEdit className="me-2 fs-3 assignment-icon" />
                    </div>
                    <div className="flex-grow-1">
                      <a className="wd-assignment-link text-decoration-none text-dark" href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                        <strong>{assignment.title}</strong>
                      </a>
                      <div className="assignment-details">
                        <span className="text-danger">Multiple Modules </span>| 
                        <span><strong> Not available until </strong> May 6 at 12:00am</span> |
                        <span><strong>Due</strong> May 13 at 11:59pm</span> |
                        <span>100 pts</span>
                      </div>
                    </div>
                    <LessonControlButtons />
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
  );
}
  