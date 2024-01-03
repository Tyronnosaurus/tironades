import React from 'react'
import FolderTree from '@/components/FolderTree'

// Deals with 2 cases: when the json top level is an array, and when it is a single folder

const FileBrowser = ({ json }) => {

    return (
        <div className="w-[400px] h-min-[600px] overflow-y-auto bg-[papayawhip] p-[2rem] rounded-[20px]">
            {Array.isArray(json) ?
                <div>
                    {json.map(item => {
                        return <FolderTree key={item.name} json={item} parentPath={"documents"}/>
                    })}
                </div>
                :
                <FolderTree json={json} parentPath={"documents"}/>    
            }
        </div>
    )

}

export default FileBrowser