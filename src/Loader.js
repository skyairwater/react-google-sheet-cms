import loaderImg from './images/loader.gif';

function Loader()
{
    return (
        <div>
            <h1 className="loadingText">Loading data from google sheets</h1>
            <img src={loaderImg} className="loadingImg"></img>
        </div>
    );
}

export default Loader;