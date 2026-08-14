import Skill from '../Shared/Skill'

const TechStack = () => {

const data = [
  { title: "React", image: <i class="fa-brands fa-react" style={{ color: `rgb(116, 192, 252)` }} fa-xs ></i>,},
  { title: "JavaScript", image: <i class="fa-brands fa-square-js" style={{ color: `rgb(255, 212, 59)` }}></i>,},
  { title: "HTML 5", image: <i class="fa-brands fa-html5" style={{ color: "#ffae00" }} ></i>,},
  { title: "CSS", image: <i class="fa-brands fa-css3-alt" style={{ color: "#0384ff" }}></i>,},
  { title: "Node js", image: <i class="fa-brands fa-node-js" style={{ color: "#287d38ff" }}></i>},
  { title: "Bootstarp 5", image: <i class="fa-brands fa-bootstrap" style={{ color: "#6f47e6ff" }}></i>,},
];
    return (
       <section id='tech-stack' className='py-15 scroll-smooth border-y border-[#e5e7eb]'>
          <div className='text-center'>
            <h5 className='uppercase text-xs sm:textsm font-bold mb-1 text-(--green)'>tech stack</h5>
             <h2 className='capitalize font-semibold sm:text-4xl text-2xl leading-tight text-(--black)' style={{ fontFamily: "poppins" }}>
               technologies i work with
             </h2>
          </div>
           <Skill skills={data} />
       </section>
    )
}

export default TechStack