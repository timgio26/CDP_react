import logo from '../assets/Logo.png'
export function Logo(){

    return(
        <div className='flex justify-center align-middle mb-10 mt-4'>
            <div className='max-w-[125px]'>
            <img src={logo} alt="" />
            </div>
            
        </div>
    )
}