const ProjectTile = ({ title, blurb }) => {
    return (
        <div className="p-4 w-full md:w-96 tile">
            <h3 className="text-xl font-medium">{title}</h3>
            <p>{blurb}</p>
        </div>
    )
}

export default ProjectTile