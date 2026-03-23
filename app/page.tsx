use client;

import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Send,
  MessageCircle,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  { title: 'Feature 1', description: 'This is feature 1' },
  { title: 'Feature 2', description: 'This is feature 2' },
  { title: 'Feature 3', description: 'This is feature 3' }
];

export default function LandingPage() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const businessName = 'Business Name';
  const description = 'Description';
  const primaryColor = '#3b82f6';
  const secondaryColor = '#1e293b';
  const contactNumber = '1234567890';

  return (
    <div>
      <nav
        className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/50 p-4 flex justify-between items-center"
        style={{
          backgroundColor: primaryColor,
          color: '#ffffff'
        }}
      >
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800"
            alt="Logo"
            className="h-8 w-8 rounded-full mr-2"
          />
          <h1 className="text-lg font-bold">{businessName}</h1>
        </div>
        <div className="flex items-center">
          <button
            className="lg:hidden"
            onClick={handleToggle}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <ul
            className={`lg:flex lg:items-center lg:space-x-4 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <a href="#" className="text-lg font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section
          className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex justify-center items-center"
          style={{
            backgroundColor: primaryColor,
            color: '#ffffff'
          }}
        >
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl font-bold">{businessName}</h1>
            <p className="text-lg">{description}</p>
            <button
              className="bg-white/50 hover:bg-white/70 p-4 rounded-lg shadow-lg mt-8"
              style={{
                backgroundColor: secondaryColor,
                color: primaryColor
              }}
            >
              Learn More
            </button>
          </div>
        </section>
        <section className="p-4 mt-8">
          <h1 className="text-2xl font-bold">Features</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-4 rounded-lg flex flex-col justify-center items-center"
              >
                <h2 className="text-lg font-bold">{feature.title}</h2>
                <p className="text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="p-4 mt-8">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <div className="flex flex-col justify-center items-center mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 p-4 rounded-lg shadow-lg"
              style={{
                backgroundColor: primaryColor,
                color: '#ffffff'
              }}
              onClick={() => {
                window.open(`https://wa.me/${contactNumber}`, '_blank');
              }}
            >
              <Phone className="mr-2" />
              Click to WhatsApp
            </button>
            <div className="flex flex-col justify-center items-center mt-4">
              <Mail className="mr-2" />
              <a href="#" className="text-lg font-bold">
                example@example.com
              </a>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <MapPin className="mr-2" />
              <a href="#" className="text-lg font-bold">
                123 Main St, Anytown, USA
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="p-4 bg-gray-200 mt-8 flex justify-center items-center"
        style={{
          backgroundColor: secondaryColor,
          color: primaryColor
        }}
      >
        <div className="flex justify-center items-center space-x-4">
          <a href="#" className="text-lg font-bold">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800"
              alt="Facebook"
              className="h-8 w-8 rounded-full"
            />
          </a>
          <a href="#" className="text-lg font-bold">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800"
              alt="Twitter"
              className="h-8 w-8 rounded-full"
            />
          </a>
          <a href="#" className="text-lg font-bold">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800"
              alt="Instagram"
              className="h-8 w-8 rounded-full"
            />
          </a>
        </div>
        <p className="text-lg font-bold mt-4">
          {businessName} &copy; 2024
        </p>
      </footer>
    </div>
  );
}