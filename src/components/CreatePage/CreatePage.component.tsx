import "./CreatePage.styles.scss";

//imports
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {AiFillFolderOpen} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export default function CreatePage() {
    return(
        <div className="create-page-container">
            <h1>WebStruct</h1>
            <div className="create-container">
                <Link className="create-choose create-new" to="/editor">
                    <h1>New</h1>
                    <AiOutlinePlusSquare className="create-icon"/>
                </Link>
                <Link className="create-choose open-page" to="/editor">
                    <h1>Open</h1>
                    <AiFillFolderOpen className="create-icon"/>
                </Link>
            </div>
        </div>
    )
}