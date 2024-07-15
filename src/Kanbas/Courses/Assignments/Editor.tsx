export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container">
        <div className="mb-4">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" value="A1" className="form-control" />
        </div>

        <div className="mb-4">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <div id="wd-description" className="form-control" style={{ height: 'auto' }}>
            <p className="mt-2">
              The assignment is <span className="text-danger">available online</span> <br/>
              Submit a link to the landing page of your Web application running on Netlify.
            </p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>
              The Kanbas application should include a link to navigate back to the landing page.
            </p>
          </div>
        </div>


        <div className="row mb-4 align-items-center">
          <div className="col-md-4 text-md-end">
            <label htmlFor="wd-points" className="form-label">Points</label>
          </div>
          <div className="col-md-8">
            <input id="wd-points" value={100} className="form-control" />
          </div>
        </div>

        <div className="row mb-4 align-items-center">
          <div className="col-md-4 text-md-end">
            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          </div>
          <div className="col-md-8">
            <select id="wd-group" className="form-select">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>


        <div className="row mb-4 align-items-center">
          <div className="col-md-4 text-md-end">
            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          </div>
          <div className="col-md-8">
            <select id="wd-display-grade-as" className="form-select">
              <option selected value="Percentage">Percentage</option>
            </select>
          </div>
        </div>

        <div className="row mb-4 align-items-center">
          <div className="col-md-4 text-md-end align-self-start">
            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          </div>
          <div className="col-md-8">
            <div className="p-3 border">
              <select id="wd-submission-type" className="form-select mb-3">
                <option selected value="Online">Online</option>
              </select> 

              <label className="form-label fw-semibold">Online Entry Options</label>
              <div className="form-check">
                <input id="wd-text-entry" type="checkbox" name="check-online-option" className="form-check-input" />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input id="wd-website-url" type="checkbox" name="check-online-option" className="form-check-input" checked/>
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input id="wd-media-recordings" type="checkbox" name="check-online-option" className="form-check-input" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input id="wd-student-annotation" type="checkbox" name="check-online-option" className="form-check-input" />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <div className="form-check">
                <input id="wd-file-upload" type="checkbox" name="check-online-option" className="form-check-input" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4 align-items-center">
          <div className="col-md-4 text-md-end align-self-start">
            <label htmlFor="wd-assign" className="form-label">Assign</label>
          </div>
          <div className="col-md-8">
            <div className="p-3 border">

              <div className="row mb-4 align-items-center">
                <div className="col-md-4">
                  <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                </div>
                <div className="col-md-8">
                  <input id="wd-assign-to" value="Everyone" className="form-control" />
                </div>
              </div>

              <div className="row mb-4 align-items-center">
                <div className="col-md-4">
                  <label htmlFor="wd-due-date" className="form-label">Due</label>
                </div>
                <div className="col-md-8">
                  <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
                </div>
              </div>
              <div className="row mb-4 align-items-center">
                <div className="col-md-4">
                  <label htmlFor="wd-available-from" className="form-label">Available from</label>
                </div>
                <div className="col-md-8">
                  <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                </div>
              </div>
              <div className="row mb-4 align-items-center">
                <div className="col-md-4">
                  <label htmlFor="wd-available-until" className="form-label">Until</label>
                </div>
                <div className="col-md-8">
                  <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
          <button id="wd-save" className="btn btn-success">Save</button>
        </div>
      </div>
    );
}
