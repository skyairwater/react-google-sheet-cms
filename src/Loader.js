import loaderImg from './images/loader.gif';

function Loader()
{
    return (
        <div>
            <h1 className="loadingText">Refreshing data..</h1>
            <img alt="loader" src={loaderImg} className="loadingImg"></img>
        </div>
    );
}

export default Loader;