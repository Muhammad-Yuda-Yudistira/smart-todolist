import Flow from "@/Components/Homepage/Flow";
import Hero from "@/Components/Homepage/Hero";
import Footer from "@/Layouts/Footer";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";

export default function Homepage() {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <Hero />
            <div className="container w-full my-36 text-center">
                <Flow />
            </div>
            <Footer />
        </>
    );
}
