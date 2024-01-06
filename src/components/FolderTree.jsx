'use client';

import { useState } from 'react';
import RowContainer from './RowContainer';


const FolderTree = ({ json, parentPath }) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }
    

    if (json.isFolder) {
        return (
            <div className='pl-3'>
                <RowContainer type={'folder'} name={json.name} handleClick={handleClick} />

                <div className={`${expanded ? 'block' : 'hidden'}`}>
                    {json.items.map(item => {
                        return(<FolderTree key={item.name} json={item} parentPath={parentPath + "/" + json.name}/>)
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div className='pl-3'>
                <RowContainer type={'file'} name={json.name} parentPath={parentPath} />
            </div>
        )
    }

}

export default FolderTree;