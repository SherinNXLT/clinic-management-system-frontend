import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-500 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-2xl font-semibold text-gray-700 animate-bounce">
                    Page Not Found
                </p>
                <p className="mt-2 text-gray-500">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="mt-6">
                    <Link
                        to="/"
                        className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md 
                       transition hover:bg-blue-700 focus:outline-none focus:ring-2 
                       focus:ring-blue-400 focus:ring-offset-1"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
