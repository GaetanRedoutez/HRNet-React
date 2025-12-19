export const Header = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="grid w-full grid-cols-3 items-center border-b-2 border-gray-300 bg-gray-200 shadow-md">
      <div className="col-start-2 flex w-full items-center justify-center p-4 text-4xl font-bold">
        <h1>HR Net</h1>
      </div>
      <nav>
        <div className="flex w-full items-center justify-end gap-6 p-4 text-lg">
          <a
            href="/"
            className={`font-medium transition-all duration-200 ${
              currentPath === "/"
                ? "text-blue-600 underline decoration-2 underline-offset-4"
                : "text-gray-700 underline-offset-4 hover:text-blue-600 hover:underline"
            }`}
          >
            Home
          </a>
          <a
            href="/current-employees"
            className={`font-medium transition-all duration-200 ${
              currentPath === "/current-employees"
                ? "text-blue-600 underline decoration-2 underline-offset-4"
                : "text-gray-700 underline-offset-4 hover:text-blue-600 hover:underline"
            }`}
          >
            Current Employees
          </a>
        </div>
      </nav>
    </div>
  );
};
