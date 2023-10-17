import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Note from "@/Components/Notes/Note";
import NoteList from "@/Components/Notes/NoteList";

export default function Dashboard(props) {
    const auth = props.auth;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-12 py-12">
                            <Note
                                data={props.data}
                                categories={props.categories}
                            />
                            <h1 className="text-center mb-12 text-4xl">
                                Your Routines
                            </h1>
                            <NoteList data={props.data} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
