const Answer = (props) => {
    
    return (
        <div style={styles.container} className="answer" >
            <img style={styles.image} src={props.value.image} />
            <div style={styles.titleContainer} onClick={() => props.onclick(props.value)}>
                <h1 style={styles.title}>{props.value.value}</h1>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '230px',
        height: '239px',
        position: 'relative',
    },
    image: {
        borderRadius: '5px',
        height: '100%',
        width: '100%',
    },
    titleContainer: {
        background:" rgba(0, 0, 0, 0.2)",
        height:'100%',
        width: '100%',
        position: 'absolute',
        top: '0',
        textAlign: 'center'
    },
    title: {
        width: '100%',
        fontSize:'22px',
        color:"white"
    }

}
export default Answer