import './directoryitem.styles.scss';

const Directoryitems = ({ category }) => {
    const { imageUrl, title } = category;
    
    return (
        <div className="directory-item-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="image" />
            <div className="body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};


export default Directoryitems