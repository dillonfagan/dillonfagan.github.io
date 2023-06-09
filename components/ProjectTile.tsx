const ProjectTile = ({ title, blurb, href }) => {
	return (
		<a className="block p-4 w-full md:w-96 tile" href={href} target="_blank">
			<h3 className="mb-4 text-xl font-medium">{title}</h3>
			<p>{blurb}</p>
		</a>
	)
}

export default ProjectTile