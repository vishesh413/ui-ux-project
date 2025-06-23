

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-7 lg:px-8  ">
                  {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>Mobile Development Academy is a leading platform that empowers learners to build modern mobile apps and grow as skilled developers.</p>
         </div>          
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href=" " className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-x-4 text-gray-400 flex">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">New Delhi, India<br />Delhi 10001</p>
          <p className="text-gray-400 mt-2">Email: info@mobiledevacademy.com</p>
        </div>


            </div>
        </footer>
    )
}

export default Footer