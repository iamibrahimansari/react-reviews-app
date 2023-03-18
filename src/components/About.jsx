const About = ({name, profession, aboutDesc}) =>{
    return(
        <section className="emp-information__container">
            <h1 className="emp-information__name">{name}</h1>
            <h2 className="emp-information__profession">{profession}</h2>
            <p className="emp-information__desc">{aboutDesc}</p>
        </section>
    )
}

export default About;