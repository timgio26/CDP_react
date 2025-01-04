import logo from '../assets/Logo.png'
export function Logo(){

    return(
        <div className='flex justify-center align-middle mb-2 md:mb-10 mt-2 md:mt-4'>
            <div className='max-w-16 md:max-w-[125px]'>
            <img src={logo} alt="" />
            </div>
            
        </div>
    )
}