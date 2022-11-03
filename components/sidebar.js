export default function Sidebar({ children }) {
  return (
    <>
      <div className='md:float-left flex flex-col m-4'>
        {children}
      </div>
    </>
  )
}
