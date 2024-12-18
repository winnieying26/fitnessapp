
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from "@/assets/Logo.png"
import Link from "@/scenses/navbar/Link"
import { SelectedPage } from '@/shared/types'

interface Props {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";

    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Left side*/}
                    <img alt="logo" src={Logo} />
                </div>
                {/* Right side*/}
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                      <Link 
                      page ="Home"
                      selectedPage={selectedPage} 
                      setSelectedPage={setSelectedPage}/>

                       <Link 
                      page ="Benefits"
                      selectedPage={selectedPage} 
                      setSelectedPage={setSelectedPage}/>
                       <Link 
                      page ="Classes"
                      selectedPage={selectedPage} 
                      setSelectedPage={setSelectedPage}/>
                       <Link 
                      page ="ContactUs"
                      selectedPage={selectedPage} 
                      setSelectedPage={setSelectedPage}/>


                    </div>
                    <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <button>Become A Member</button>
                    </div>
                </div>

            </div>

        </div>
    </nav>
}

export default Navbar

