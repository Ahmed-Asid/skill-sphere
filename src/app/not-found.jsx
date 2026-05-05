import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <div className='w-full h-[80vh] flex flex-col gap-3 justify-center items-center'>
                <p className="text-xl font-semibold">Page Not Found</p>
                <Link href={'/'}><button className="btn btn-outline btn-neutral">Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;