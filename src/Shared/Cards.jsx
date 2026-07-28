import React from 'react'
import { ArrowRight } from 'lucide-react'
import ButtonOne from './ButtonOne'

const Cards = (props) => {
  return (
    <div class="group relative w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg" >
      <div class="relative h-80 w-sm overflow-hidden">
        <img src={props.image} alt="Project" class="h-full w-full object-cover object-top transition duration-500 ease-in-out group-hover:scale-110" />

        <div class="absolute inset-0 flex flex-col justify-end bg-black/0 p-6 opacity-0 transition-all duration-500 group-hover:bg-black/70 group-hover:opacity-100" >

          <div class="translate-y-8 transition duration-500 group-hover:translate-y-0" >
            <span class="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm" >
              {props.tech}
            </span>
            <h2 class="text-2xl font-bold text-white"> {props.h3} </h2>
            <p class="mt-2 text-sm leading-6 text-gray-200"> {props.p} </p>
            <div class="mt-5 flex gap-3">
              <ButtonOne name="View Project" color="card-one" link={props.link} />
              <ButtonOne name="GitHub" color="card-two" link={props.github} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cards