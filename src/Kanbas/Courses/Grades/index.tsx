import { FaSearch } from "react-icons/fa";
import GradesControls from "./GradesControls";
import { CiFilter } from "react-icons/ci";

export default function Grades() { 
    return (
        <div id="wd-grades">
            <GradesControls /> <br /><br /><br /><br />

            <div className="row">
                <div className="col-12 col-md-6 mb-2">
                    <h4>Student Names</h4>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input
                            id="wd-search-students"
                            className="form-control"
                            placeholder="Search Students"
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                    <h4>Assignments Names</h4>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input
                            id="wd-search-assignments"
                            className="form-control"
                            placeholder="Search Assignments"
                        />
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-12 col-md-3 mb-2">
                    <button id="wd-add-assignment" className="btn btn-secondary">
                        <CiFilter className="fs-3 me-2" />
                        Apply Filters
                    </button>
                </div>
            </div>

            <div id="wd-grades-tables">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th className="align-middle">Student Name</th>
                                <th>A1 Setup <br /> Out of 100</th>
                                <th>A2 Html <br /> Out of 100</th>
                                <th>A3 CSS <br /> Out of 100</th>
                                <th>A4 BOOTSTRAP <br /> Out of 100</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-danger">Jane Adams</td>
                                <td>100%</td>
                                <td>96.67%</td>
                                <td>92.18%</td>
                                <td>66.22%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Christina Allen</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Samreen Ansari</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Han Boo</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>88.03%</td>
                                <td>98.99%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Mahi Sai Srinivias Bobbilli</td>
                                <td>100%</td>
                                <td>96.67%</td>
                                <td>98.37%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Ciran Sao</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}