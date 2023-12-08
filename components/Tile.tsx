import { ReactNode } from "react"

const Tile = ({ title, imgSrc, square = true, children }: { title?: string, imgSrc?: string, square?: boolean, children?: ReactNode }) => {
    return (
        <div className={`p-4 ${square ? 'w-32 h-32' : 'w-full'} tile overflow-hidden relative`}>
            {title && <h4 className="absolute top-2 left-2 font-medium">{title}</h4>}
            {imgSrc && <img src={imgSrc} alt={title} className="absolute top-1/3 left-1/3 w-24 h-24" />}
            {children}
        </div>
    )
}

export default Tile