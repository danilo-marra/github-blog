import './App.css'
import logo from './assets/logo.svg'
import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react"

export default function App() {

  return (
    <div>
      <div className='max-w-[1140px] mx-auto font-nunito'>

        <div className='flex justify-center min-h-[296px] bg-cover bg-center'>
          <div className='text-center pt-16'>
            <img src={logo} alt="Github Blog" className='mx-auto' />
            <h1 className='text-blue font-coda text-2xl pt-4' >
              Github Blog
            </h1>
          </div>
        </div>

        <div className='profileWrapper max-w-[864px] flex items-center bg-profile mx-auto rounded-lg p-7 shadow-lg -translate-y-1/2'>
          <div className='profilePicture w-[148px]'>
            <img src='https://github.com/danilo-marra.png' className='rounded-lg' alt='Profile Picture' />
          </div>
          <div className='profileContent px-5'>
            <div className='space-y-5'>
              <div className='profileTitle flex justify-between'>
                <h2 className='text-title text-2xl'>Cameron Williamson</h2>
                <div className='text-blue flex items-center space-x-1 font-bold'>
                  <a href='#' className='text-blue uppercase text-xs'>Github</a><ArrowSquareOut size={16} weight='bold' />
                </div>
              </div>
              <p className='text-text leading-6'>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
              <div className='profileSocial flex text-label mt-2 space-x-2'>
                <GithubLogo size={24} weight='fill' /><a href='#' className='text-text'>cameronwll</a>
                <Building size={24} weight='fill' /><a href='#' className='text-text'>Rocketseat</a>
                <Users size={24} weight="fill" /><a href='#' className='text-text'>32 seguidores</a>
              </div>
            </div>
          </div>
        </div>

        <div className='publishWrapper max-w-[864px] mx-auto'>
          <div className='publishSearchBar'>
            <div className='flex justify-between'>
              <h3 className='text-title'>Publicações</h3>
              <p className='text-text text-sm'>6 publicações</p>
            </div>
            <div>
              <input className='w-full h-[50px] text-text bg-input rounded-md px-4 ring-1 ring-pink-500 mt-4' type='text' placeholder='Buscar conteúdo' />
            </div>
          </div>
          <div className='publishContents mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>

            <div className='publishCard max-w-[416px] h-[260px] bg-post px-8 py-12 rounded-md overflow-hidden overflow-y-auto custom-scrollbar '>
              <div className='publishHeader flex justify-between'>
                <h1 className='text-title text-lg max-w-60'>JavaScript data types and data structures</h1>
                <span className='text-span text-sm'>Há 1 dia</span>
              </div>
              <div className='publishContent text-text mt-6'>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                  Dynamic typing
                  JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                  let foo = 42; // foo is now a number
                  foo = 'bar'; // foo is now a string
                  foo = true; // foo is now a boolean</p>
              </div>
            </div>

            <div className='publishCard max-w-[416px] h-[260px] bg-post px-8 py-12 rounded-md overflow-hidden overflow-y-auto custom-scrollbar '>
              <div className='publishHeader flex justify-between'>
                <h1 className='text-title text-lg max-w-60'>JavaScript data types and data structures</h1>
                <span className='text-span text-sm'>Há 1 dia</span>
              </div>
              <div className='publishContent text-text mt-6'>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                  Dynamic typing
                  JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                  let foo = 42; // foo is now a number
                  foo = 'bar'; // foo is now a string
                  foo = true; // foo is now a boolean</p>
              </div>
            </div>

            <div className='publishCard max-w-[416px] h-[260px] bg-post px-8 py-12 rounded-md overflow-hidden overflow-y-auto custom-scrollbar '>
              <div className='publishHeader flex justify-between'>
                <h1 className='text-title text-lg max-w-60'>JavaScript data types and data structures</h1>
                <span className='text-span text-sm'>Há 1 dia</span>
              </div>
              <div className='publishContent text-text mt-6'>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                  Dynamic typing
                  JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                  let foo = 42; // foo is now a number
                  foo = 'bar'; // foo is now a string
                  foo = true; // foo is now a boolean</p>
              </div>
            </div>

            <div className='publishCard max-w-[416px] h-[260px] bg-post px-8 py-12 rounded-md overflow-hidden overflow-y-auto custom-scrollbar '>
              <div className='publishHeader flex justify-between'>
                <h1 className='text-title text-lg max-w-60'>JavaScript data types and data structures</h1>
                <span className='text-span text-sm'>Há 1 dia</span>
              </div>
              <div className='publishContent text-text mt-6'>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                  Dynamic typing
                  JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                  let foo = 42; // foo is now a number
                  foo = 'bar'; // foo is now a string
                  foo = true; // foo is now a boolean</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}


