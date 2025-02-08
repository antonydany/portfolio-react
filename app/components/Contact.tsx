import { Mail, Github, Instagram } from "lucide-react"


const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "antonydany10@hotmail.com", href: "mailto:antonydany10@hotmail.com" },
    { icon: Github, label: "GitHub", value: "antonydany", href: "https://github.com/antonydany" },
    { icon: Instagram, label: "Instagram", value: "@antonydany1", href: "https://instagram.com/antonydany1" },
  ]

  return (
    <section id="contact" className="my-16 relative">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Contact Me</h2>
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 relative overflow-hidden">
        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-700 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-600"
            >
              <item.icon className="w-6 h-6 mr-3 text-blue-400" />
              <div>
                <h3 className="font-semibold text-blue-400">{item.label}</h3>
                <p className="text-gray-300">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      </div>
    </section>
  )
}

export default Contact

