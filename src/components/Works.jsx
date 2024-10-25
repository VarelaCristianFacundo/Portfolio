import React from 'react'
import Tilt from 'react-parallax-tilt'
import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'

const ProjectCard = ({ name, description, tags, image, source_code_link }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="bg-black-200 p-5 rounded-3xl w-full sm:w-[360px] md:w-[300px] h-[500px] flex flex-col justify-between" // Altura fija para las cards
  >
    <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
      <img
        src={image}
        alt="project_image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-end m-3">
        <div
          onClick={() => window.open(source_code_link, '_blank')}
          className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github}
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[20px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </Tilt>
)

const Works = () => {
  return (
    <div>
      <div>
        <p className="text-secondary">My work</p>
        <h2 className="text-white text-[32px] font-bold">Projects.</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={`project-${index}`}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, 'projects')
