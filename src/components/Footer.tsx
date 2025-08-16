import LogoIcon from './icons/LogoIcon';

const footerLinks = {
  useCases: [
    "Abstergo Ltd.",
    "Nursing Assistant", 
    "Medical Assistant",
    "Marketing Coordinator",
    "Dog Trainer",
    "Web Designer",
    "President of Sales",
    "Medical Assistant"
  ],
  categories: [
    "Algeria",
    "South Africa",
    "Central African Republic", 
    "Afghanistan",
    "Viet Nam",
    "Iran (Islamic Republic of)",
    "Pakistan",
    "Serbia"
  ],
  documentations: [
    "Dog Trainer",
    "Nursing Assistant",
    "Marketing Coordinator",
    "President of Sales", 
    "Web Designer",
    "Medical Assistant",
    "Dog Trainer",
    "President of Sales"
  ],
  conditions: [
    "Ethical Hacker",
    "UI/UX Designer",
    "Software Tester",
    "Scrum Master",
    "Project Manager",
    "Team Leader",
    "Software Development",
    "Software Developer"
  ]
};

const socialLinks = [
  { name: "Facebook", icon: "📘" },
  { name: "Twitter", icon: "🐦" },
  { name: "Instagram", icon: "📷" },
  { name: "Youtube", icon: "📺" }
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Separator Line */}
      <div className="w-full h-px bg-gray-200" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand and Social */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <LogoIcon width={25} height={29} color="#1f2937" />
              <span className="heading-lg text-gray-900">.fis</span>
            </div>
            
            {/* Social Links */}
            <div className="space-y-2">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xl">{social.icon}</span>
                  <a href="#" className="text-small text-gray-700 hover:text-gray-900 transition-colors">
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="space-y-4">
            <h3 className="text-small font-bold text-gray-900">Use Cases</h3>
            <div className="space-y-3">
              {footerLinks.useCases.map((link, index) => (
                <a key={index} href="#" className="block text-small text-gray-600 hover:text-gray-900 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-small font-bold text-gray-900">Categories</h3>
            <div className="space-y-3">
              {footerLinks.categories.map((link, index) => (
                <a key={index} href="#" className="block text-small text-gray-600 hover:text-gray-900 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Documentations */}
          <div className="space-y-4">
            <h3 className="text-small font-bold text-gray-900">Documentations</h3>
            <div className="space-y-3">
              {footerLinks.documentations.map((link, index) => (
                <a key={index} href="#" className="block text-small text-gray-600 hover:text-gray-900 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Our Condition */}
          <div className="space-y-4">
            <h3 className="text-small font-bold text-gray-900">Our Condition</h3>
            <div className="space-y-3">
              {footerLinks.conditions.map((link, index) => (
                <a key={index} href="#" className="block text-small text-gray-600 hover:text-gray-900 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;