import Link from "next/link";
import { FcFolder } from "react-icons/fc";
import { FaFilePdf } from "react-icons/fa6";

const RowContainer = ({ type, name, parentPath, handleClick }) => {
    return (
        <div className='flex flex-row pb-2 cursor-pointer items-baseline'
             onClick={handleClick ? handleClick : null}>


            {type === 'folder' ?
                <>
                    <div>
                        <FcFolder size={16}/>
                    </div>
                    <div className='ml-1'>
                        {name}
                    </div>
                </>
                :
                <>
                    <div>
                        <FaFilePdf color="red" opacity="60%" size={16}/>
                    </div>
                    <div className='ml-1'>
                        <Link href={`${parentPath}/${name}`} target="_blank">{name}</Link>
                    </div>
                </>
            }

        </div>
    )
}



export default RowContainer;