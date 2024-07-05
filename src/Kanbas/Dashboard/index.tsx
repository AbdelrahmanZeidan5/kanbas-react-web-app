export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
            <div className="wd-dashboard-course">
                <img src="/images/reactjs.jpg" width={200} alt="React" />
                <div>
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
                    CS1001 React JS
                </a>
                <p className="wd-dashboard-course-title">
                    Building Client Applications
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
            </div>

            <div className="wd-dashboard-course">
                <img src="/images/html.jpg" width={200} alt="HTML" />
                <div>
                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1002/Home">
                        CS1002 HTML
                    </a>
                    <p className="wd-dashboard-course-title">Web Development Fundamentals</p>
                    <a href="#/Kanbas/Courses/1002/Home"> Go </a>
                </div>
            </div>

            <div className="wd-dashboard-course">
                <img src="/images/css.jpg" width={200} alt="CSS" />
                <div>
                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1003/Home">
                        CS1003 CSS
                    </a>
                    <p className="wd-dashboard-course-title">Styling the Web</p>
                    <a href="#/Kanbas/Courses/1003/Home"> Go </a>
                </div>
            </div>

            <div className="wd-dashboard-course">
                <img src="/images/javascript.jpg" width={200} alt="JavaScript" />
                <div>
                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1004/Home">
                    CS1004 JavaScript
                    </a>
                    <p className="wd-dashboard-course-title">Interactive Web Development</p>
                    <a href="#/Kanbas/Courses/1004/Home"> Go </a>
                </div>
            </div>

            <div className="wd-dashboard-course">
                <img src="/images/typescript.jpg" width={200} alt="TypeScript" />
                <div>
                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1005/Home">
                    CS1005 TypeScript
                    </a>
                    <p className="wd-dashboard-course-title">Typed JavaScript at Scale</p>
                    <a href="#/Kanbas/Courses/1005/Home"> Go </a>
                </div>
            </div>

            <div className="wd-dashboard-course">
                <img src="/images/nodejs.jpg" width={200} alt="NodeJS" />
                <div>
                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1006/Home">
                    CS1006 NodeJS
                    </a>
                    <p className="wd-dashboard-course-title">Server-side Development</p>
                    <a href="#/Kanbas/Courses/1006/Home"> Go </a>
                </div>
            </div>

            <div className="wd-dashboard-course">
                <img src="/images/angular.jpg" width={200} alt="Angular" />
                <div>
                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1007/Home">
                    CS1007 Angular
                    </a>
                    <p className="wd-dashboard-course-title">Building Client Applications</p>
                    <a href="#/Kanbas/Courses/1007/Home"> Go </a>
                </div>
            </div>
        </div>
      </div>
  );}
  