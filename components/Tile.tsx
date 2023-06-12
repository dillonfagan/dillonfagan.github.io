const Tile = ({ title, imgSrc }: { title?: string, imgSrc?: string }) => {
    return (
        <div className="p-4 w-32 h-32 tile overflow-hidden relative">
            {title && <h4 className="absolute top-2 left-2 font-medium">{title}</h4>}
            {imgSrc && <img src={imgSrc} alt={title} className="absolute top-1/3 left-1/3 w-24 h-24" />}
        </div>
    )
}

export default Tile