import Avatar from './Avatar'
import { ViewGridIcon } from '@heroicons/react/solid'

export default function Header() {
    return (
        <header className="flex w-full p-5  justify-between items-center capitalize text-gray-700 text-sm">
            {/* Left */}
            <div className="flex space-x-4 items-center">
                <p className="link">about</p>
                <p className="link">store</p>
            </div>

            {/* Right */}
            <div className="flex space-x-4 items-center">
                <p className="link">gmail</p>
                <p className="link">images</p>


            
                {/* Icon */}
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-100"/>


                
                {/*Avatar*/}
                <Avatar url="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=Angry&mouthType=Twinkle&skinColor=DarkBrown" />
            </div>
        </header>
    )
}
