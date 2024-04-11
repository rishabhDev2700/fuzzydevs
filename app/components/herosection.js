import Button from "./button"
export default function HeroSection() {
  return (
    <div className='mt-24 p-8 text-center w-[95vw] h-[60vh] shadow-md shadow-black/20 rounded-3xl border-2 border-black/10 mx-auto backdrop-blur-lg bg-white/50 md:flex md:flex-col justify-center items-center'>
      <h1 className='text-5xl font-thebold py-4'>Elevate Your Digital Presence</h1>
      <h2 className='text-3xl py-4'>Transforming Ideas into Exceptional Software</h2>
      <h2 className='text-xl py-4 font-raleway-regular '>Unlock the potential of your business with our expertise</h2>
      <Button>Get Started</Button>
    </div>
  )
}
