import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="my-16 relative">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-text">About Me</h2>
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 md:flex items-center space-y-6 md:space-y-0 md:space-x-6 relative overflow-hidden">
        <div className="md:w-1/3 flex justify-center">
          <div className="w-48 h-48 relative overflow-hidden rounded-full border-4 border-blue-500 shadow-lg floating">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Antonio Daniel"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 relative z-10">
          <h3 className="text-2xl font-semibold mb-4 gradient-text">Hello, I'm Antonio Daniel</h3>
          <p className="mb-4 text-gray-300">
            Known as "Dany", I'm a passionate developer specializing in creating customized applications. With a strong
            foundation in web technologies and various frameworks, I bring ideas to life through code.
          </p>
          <p className="text-gray-300">
            My expertise spans from front-end technologies like HTML, CSS, and JavaScript to back-end solutions using
            PHP. I'm always eager to learn and adapt to new technologies, which allows me to provide comprehensive
            solutions to complex problems.
          </p>
        </div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}

export default About

