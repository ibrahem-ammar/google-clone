function Avatar({ url }){
	return (
		<img 
			className="h-10 cursor-pointer transition duration-150 transform hover:scale-110"
			loading="lazy"
			src ={url}
			alt="Profile Pic"
			/>
		);
}

export default Avatar