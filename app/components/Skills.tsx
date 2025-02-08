const Skills = () => {
    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "React",
      "Angular (basic)",
      "Svelte (basic)",
      "MySQL",
      "Git",
    ]
  
    return (
      <section id="skills" className="my-16 relative">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Skills</h2>
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 relative overflow-hidden">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-2 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {skill}
              </li>
            ))}
          </ul>
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </section>
    )
  }
  
  export default Skills
  
  