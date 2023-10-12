import { Link } from "@inertiajs/react";

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Smart Todolist</h1>
                    <p className="py-6">
                        You can create todolist for whole days of your routines
                        and we will analyst your routine with graphic, both
                        working / studying and life activities easily.
                    </p>
                    <Link
                        className="btn btn-primary normal-case text-xl"
                        href={route("notes.create")}
                        as="button"
                    >
                        Try Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
