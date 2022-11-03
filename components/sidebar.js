export default function Sidebar({ children }) {
  return (
    <>
      <div className='md:max-w-[20vw] md:float-left flex flex-col m-4'>
        {children}
      </div>
    </>
  )
}
