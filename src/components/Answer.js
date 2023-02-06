const Answer = (props) => {
    
    return (
        <div style={styles.container} className="answer" >
            <img style={styles.image} onClick={() => props.onclick(props.value)} src={props.value.image} />
            <div style={styles.titleContainer}>
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
        width: '100%'
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: '0',
        textAlign: 'center'
    },
    title: {
        width: '100%'
    }

}
export default Answer