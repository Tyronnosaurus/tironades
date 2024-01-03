import Link from "next/link";
import { FcFolder, FcFile } from "react-icons/fc";


const RowContainer = ({ type, name, parentPath, handleClick }) => {
    return (
        <div className='flex align-middle p-1 m-0 h-min-[4rem] cursor-pointer'
             onClick={handleClick ? handleClick : null}>


            {type === 'folder' ?
                <>
                    <FcFolder />
                    <div className='ml-[0.5rem]'>
                        {name}
                    </div>
                </>
                :
                <>
                    <FcFile />
                    <div className='ml-[0.5rem]'>
                        <Link href={`${parentPath}/${name}`} target="_blank">{name}</Link>
                    </div>
                </>
            }

        </div>
    )
}



export default RowContainer;