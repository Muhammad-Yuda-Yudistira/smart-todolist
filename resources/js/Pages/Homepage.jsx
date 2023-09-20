export default function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container w-full my-36 text-center">
              <Flow />
            </div>
            <Modal />
            <Footer />
        </>
    );
}

function Navbar() {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Smart Todolist</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost normal-case text-xl" onClick={()=>document.getElementById('my_modal_3').showModal()}>Try Now</a>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Smart Todolist</h1>
                    <p className="py-6">
                        You can create todolist for whole days of your routines and we will analyst your routine with graphic, both working / studying and life activities easily.
                    </p>
                    <button className="btn btn-active btn-ghost normal-case text-xl" onClick={()=>document.getElementById('my_modal_3').showModal()}>Try Now</button>
                </div>
            </div>
        </div>
    );
}

function Flow() {
  return (
      <>
          <div className="flex justify-center mb-14">
            <h1 className="text-4xl">How Do It Works</h1>
          </div>
          <div className="flex justify-center">
              <ul className="steps steps-vertical lg:steps-horizontal">
                  <li className="step step-primary">Create Account</li>
                  <li className="step step-primary">Create Routine</li>
                  <li className="step step-primary">Looks Your Graphic</li>
              </ul>
          </div>
      </>
  );
}

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p className="font-bold">
            Build by <a href="https://www.freelancer.co.id/u/yudistira00" target="_blank" rel="noopener noreferrer">Muhammad Yuda Yudistira</a>
            </p> 
            <p>Copyright © 2023 - All right reserved</p>
        </aside> 
    </footer>
  )
}

function Modal() {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex justify-center items-center flex-col text-center">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-5">Choice Your Status!</h3>
                    <ul className="w-[50%]">
                        <li className="mb-3 text-start">
                            <input type="radio" name="student" id="student" className="radio active:radio-primary mr-2" />
                            <label htmlFor="student">
                                Student
                            </label>
                        </li>
                        <li className="mb-3 text-start">
                            <input type="radio" name="employee" id="employee" className="radio active:radio-primary mr-2" checked />
                            <label htmlFor="employee">
                                Employee
                            </label>
                        </li>
                    </ul>
                    <div className="modal-action">
                        <form method="post" action="">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-active btn-ghost normal-case text-xl">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}