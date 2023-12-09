const ProjectTile = ({ title, subtitle = null, blurb, href = null }) => {
	return (
		<a className={`group relative p-4 w-full tile ${href ? 'cursor-pointer' : 'cursor-default'}`} href={href} target="_blank">
			{href && (
				<div className="absolute top-0 right-0 p-2 bg-orange-500 text-white group-hover:bg-zinc-700">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
					</svg>
				</div>
			)}

			<h3 className="mb-4 text-xl lg:text-2xl font-medium">{title}</h3>
			{subtitle && <h4 className="-mt-4 mb-4 text-sm lg:text-base font-medium text-zinc-500">{subtitle}</h4>}
			<p>{blurb}</p>
		</a>
	)
}

export default ProjectTile