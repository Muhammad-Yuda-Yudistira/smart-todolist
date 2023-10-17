import Note from "@/Components/Notes/Note";
import NoteList from "@/Components/Notes/NoteList";
import Footer from "@/Layouts/Footer";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";

export default function Notes(props) {
    return (
        <>
            <Head title="Note" />
            <Navbar />
            <div className="px-12 py-12">
                <Note data={props.data} categories={props.categories} />
                <h1 className="text-center mb-12 text-4xl">Your Routines</h1>
                <NoteList data={props.data} />
            </div>
            <Footer />
        </>
    );
}
