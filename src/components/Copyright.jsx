const Copyright = () => {
  return (
    <div className="bg-black text-white py-1">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          {/* Designed & Developed Text */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4 mb-4 md:mb-0">
            <ul className="list-none">
              <li>
                Designed &amp; Developed by <a href="#" className="text-secondary">zero Group</a>
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="w-full md:w-1/2 text-center md:text-right px-4">
            <ul className="list-none flex justify-center md:justify-end space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
