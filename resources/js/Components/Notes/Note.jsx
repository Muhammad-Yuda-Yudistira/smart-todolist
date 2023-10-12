import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Note(props) {
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [days, setDays] = useState([]);
    const [clock, setClock] = useState("");

    const { flash } = usePage().props;

    function handleChange(event) {
        const { name, value } = event.target;
        switch (name) {
            case "category":
                setCategoryId(value);
                break;
            case "days":
                setDays((prevDays) => [...prevDays, value]);
                break;
            case "clock":
                setClock(value);
                break;
            case "description":
                setDescription(value);
                break;
        }
    }

    function handleCreate() {
        const data = {
            categoryId: categoryId,
            days: days,
            clock: clock,
            description: description,
        };

        router.post(route("notes.store"), { data: data });

        // setDescription("");
        // setTime("");

        // const checkboxes = document.querySelectorAll(".checkbox");
        // const select = document.querySelector(".select");

        // const options = select.options;
        // for (let i = 0; i < options.length; i++) {
        //     options[i].selected = false;
        // }
        // options[0].selected = true;

        // checkboxes.forEach((checkbox) => {
        //     checkbox.checked = false;
        // });
    }

    useEffect(() => {
        if (!props.data) {
            router.visit(route("notes.index"), { method: "get" });
        }
        return;
    }, []);

    return (
        <div className="flex">
            <div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">
                            Pick category you want
                        </span>
                    </label>
                    <select
                        className="select select-primary"
                        onChange={handleChange}
                        name="category"
                        required
                    >
                        <option disabled selected className="bg-primary">
                            Pick one
                        </option>
                        {props.categories.map((category) => {
                            return (
                                <option
                                    value={category.id}
                                    className="capitalize"
                                >
                                    {category.name}
                                </option>
                            );
                        })}
                    </select>
                    <label className="label">
                        <span className="label-text-alt"></span>
                        <span className="label-text-alt">Category</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <ul className="menu menu-sm bg-base-200 w-full rounded-box">
                        <h2 className="menu-title">
                            Choice your day for activity
                        </h2>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer space-x-3">
                                    <span className="label-text">Monday</span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm"
                                        name="days"
                                        value="monday"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer space-x-3">
                                    <span className="label-text">Tuesday</span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm"
                                        name="days"
                                        value="tuesday"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer space-x-3">
                                    <span className="label-text">
                                        Wednesday
                                    </span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm"
                                        name="days"
                                        value="wednesday"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer space-x-3">
                                    <span className="label-text">thursday</span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm"
                                        name="days"
                                        value="thursday"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer space-x-3">
                                    <span className="label-text">Friday</span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm"
                                        name="days"
                                        value="friday"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer space-x-3">
                                    <span className="label-text">Saturday</span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm"
                                        name="days"
                                        value="saturday"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer space-x-3">
                                    <span className="label-text">Sunday</span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm"
                                        name="days"
                                        value="sunday"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </li>
                    </ul>
                    <label className="label">
                        <span className="label-text-alt"></span>
                        <span className="label-text-alt">Days</span>
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">
                            When do your activity will be start
                        </span>
                    </label>
                    <input
                        type="time"
                        className="input input-bordered input-primary w-full max-w-xs"
                        name="clock"
                        onChange={handleChange}
                        value={clock}
                    />
                    <label className="label">
                        <span className="label-text-alt"></span>
                        <span className="label-text-alt">Clock</span>
                    </label>
                </div>
            </div>
            <div className="w-full py-12">
                {flash.message && (
                    <div className="alert alert-success w-[94%] ml-16 mx-auto mb-7">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Note has been created!</span>
                    </div>
                )}

                <h1 className="text-center mb-12 text-4xl">Todolist for you</h1>
                <form className="flex flex-col items-center pb-20 pl-16 w-full">
                    <div className="flex space-x-16 w-full">
                        <div className="text-container w-full h-60">
                            <textarea
                                className="textarea textarea-primary textarea-lg w-full h-full"
                                placeholder="Describe your routine.."
                                onChange={handleChange}
                                value={description}
                                name="description"
                            ></textarea>
                        </div>
                    </div>
                    <button
                        className="btn btn-xs btn-primary max-w-xs sm:btn-sm md:btn-md lg:btn-md my-9"
                        onClick={handleCreate}
                        type="button"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
