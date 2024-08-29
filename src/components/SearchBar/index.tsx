export default function SearchBar() {
  return (
    <div>
      <div className='flex justify-between'>
        <h3 className='text-title'>Publicações</h3>
        <p className='text-text text-sm'>6 publicações</p>
      </div>
      <div>
        <input className='w-full h-[50px] text-text bg-input rounded-md px-4 ring-1 ring-pink-500 mt-4' type='text' placeholder='Buscar conteúdo' />
      </div>
    </div>
  )
}