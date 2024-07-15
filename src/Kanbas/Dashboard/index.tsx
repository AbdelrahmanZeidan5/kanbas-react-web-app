export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">

            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/reactjs.jpg" width="100%" alt="React" />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS1234 React JS </h5>
                                <p className="card-text">Full Stack software developer</p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </a>
                    </div>
                </div>
                

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/html.jpg" width="100%" alt="HTML" />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS1002 HTML </h5>
                                <p className="card-text">Web Development Fundamentals</p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/css.jpg" width="100%" alt="CSS" />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS1003 CSS </h5>
                                <p className="card-text">Styling the Web</p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/javascript.jpg" width="100%" alt="javascript" />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS1004 JavaScript </h5>
                                <p className="card-text">Interactive Web Development</p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/typescript.jpg" width="100%" alt="typescript" />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS1005 TypeScript</h5>
                                <p className="card-text">Typed JavaScript at Scale</p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="wd-dashboard-course" style={{ width: "300px" }}>
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/nodejs.jpg" width="100%" alt="nodejs" />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS1006 NodeJS</h5>
                                <p className="card-text">Server-side Development</p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="wd-dashboard-course" style={{ width: "300px" }}>
                    <div className="card">
                        <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
                            <img src="/images/angular.jpg" width="100%" alt="angular" />
                            <div className="card-body">
                                <h5 className="wd-dashboard-course-title card-title">CS1007 Angular</h5>
                                <p className="card-text">Building Client Applications</p>
                                <button className="btn btn-primary"> Go </button>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
      </div>
  );}
  