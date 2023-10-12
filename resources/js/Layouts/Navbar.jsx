import { Link } from "@inertiajs/react";

export default function Navbar({ user = "anonymous" }) {
    return (
        <div className="navbar bg-primary text-primary-content lg:px-20">
            <div className="navbar-start">
                <Link
                    className="btn btn-ghost normal-case text-xl"
                    href={route("homepage")}
                >
                    Smart Todolist
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1"></ul>
            </div>
            <div className="navbar-end">
                {!user ? (
                    <Link
                        className="btn btn-ghost normal-case text-xl"
                        href={route("notes.create")}
                        as="button"
                    >
                        Try Now
                    </Link>
                ) : (
                    <a className="btn btn-ghost normal-case text-xl"></a>
                )}
            </div>
        </div>
    );
}
