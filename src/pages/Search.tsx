import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { data } from "../database/data";

function Search() {
    // console.log(data);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body d-flex">
                            <button className="btn btn-outline-success">
                                <FontAwesomeIcon size='1x' icon={faArrowLeft}></FontAwesomeIcon>
                            </button>
                            <input type="text" className="form-control" placeholder='Search for food or restaurants'></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;