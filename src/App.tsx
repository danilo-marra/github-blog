import './App.css'
import logo from './assets/logo.svg'
import Profile from './components/Profile'
import SearchBar from './components/SearchBar'
import Content from './components/Content'

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

        <Profile />

        <div className='max-w-[864px] mx-auto'>

          <SearchBar />

          <Content />

        </div>
      </div>
    </div>
  )
}


