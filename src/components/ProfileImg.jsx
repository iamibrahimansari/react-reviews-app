const ProfileImg = ({url, width, height}) =>{
    return(
        <section className="profile-img__container">
            <img className="img" src={url} alt="employee" width={width} height={height} />
        </section>
    ) 
}

export default ProfileImg;