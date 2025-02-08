import { BarChart, FileDown, Archive } from "lucide-react"

const Projects = () => {
  return (
    <section id="projects" className="my-16 relative">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Projects</h2>
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 relative overflow-hidden">
        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Local Dashboard Project</h3>
        <p className="mb-6 text-gray-300">
          Developed a comprehensive local dashboard using PHP, featuring data visualization and file management
          capabilities.
        </p>
        <ul className="space-y-4">
          {[
            { icon: BarChart, text: "Data visualization with tables and charts" },
            { icon: FileDown, text: "CSV file upload and processing" },
            { icon: FileDown, text: "PDF report generation and download" },
            { icon: Archive, text: "ZIP file compression for bulk downloads" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center bg-gray-700 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <item.icon className="mr-4 text-blue-400" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}

export default Projects

