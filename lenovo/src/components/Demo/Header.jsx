
import {ButtonDemo} from "../ui/button"


export default function Header() {
  return (
    <>
     <header className="flex bg-gray-900 h-12 items-center justify-between">
        <h1 className="text-white text-10">PeerSpace</h1>
        <div id="login">
           <ButtonDemo></ButtonDemo> 
        </div>
     </header> 
    </>
  )
}
