const ProjectTile = ({ title, blurb }) => {
    return (
        <div className="p-4 w-96 bg-gray-200 hover:bg-gray-300">
            <h3 className="text-xl font-medium">{title}</h3>
            <p>{blurb}</p>
        </div>
    )
}

export default ProjectTile