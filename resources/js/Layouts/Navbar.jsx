import { Link } from "@inertiajs/react";

export default function Navbar() {
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
                <Link
                    className="btn btn-ghost normal-case text-xl"
                    href={route("login")}
                    as="button"
                >
                    Login
                </Link>
                <Link
                    className="btn btn-ghost normal-case text-xl"
                    href={route("register")}
                    as="button"
                >
                    Signup
                </Link>
            </div>
        </div>
    );
}
