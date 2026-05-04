import Navbar from "@/app/components/shared/Navbar";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}