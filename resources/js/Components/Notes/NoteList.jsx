export default function NoteList({ data }) {
    return (
        <>
            <div className="overflow-x-auto">
                {data.length > 0 ? (
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Time</th>
                                <th>Days</th>
                                <th>Category</th>
                                <th>Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.map((d, index) => {
                                    const days = JSON.parse(d.note.days);
                                    const stringDays = days.join(", ");

                                    return (
                                        <tr key={index} className="bg-base-200">
                                            <th>{index + 1}</th>
                                            <td>
                                                {d.note.start_time} -{" "}
                                                {d.note.end_time}
                                            </td>
                                            <td>{stringDays}</td>
                                            <td>{d.category.name}</td>
                                            <td>{d.note.body}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                ) : (
                    <h2 className="text-center text-2xl text-red-500">
                        Haven't schedule or note here..
                    </h2>
                )}
            </div>
        </>
    );
}
