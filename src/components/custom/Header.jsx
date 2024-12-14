import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export function Header() {
  return (
    <div className="w-full py-4 px-4 sm:px-6 lg:px-8 top-0 left-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className='text-2xl text-white'>Ai Implementer</h1>
        </div>
        <div>
          <Button className='bg-white hover:bg-blue-600 hover:text-white rounded-3xl'>Login</Button>
        </div>
      </div>

<div className="flex-grow flex-col justify-center mt-40 mb-10">
  <div className="text-center text-gray-100 px-4">
    <h1 className="text-5xl font-bold mb-4">AI Implementer</h1>
    <p className="text-xl max-w-2xl mx-auto">
      We develop AI-powered apps and help businesses integrate AI into their daily tasks 
      to increase profit, save time, and gain meaningful insights.
    </p>
  </div>

      <div className="flex justify-center items-center mt-5 mb-5">
      <form className="w-full max-w-md">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Enter your email" required className="bg-gray-700 text-gray-100 border-gray-600 placeholder-gray-400"/>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Subscribe
          </Button>
        </div>
      </form>
      </div>
</div>


    </div>
  )
}

