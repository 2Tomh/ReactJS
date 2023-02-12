const ImprovementTitle = () => {
    return (
        <div style={styles.title} className="improvement-title">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_0_723)">
            <path d="M2.25 8.25H0V9.75H2.25V8.25Z" fill="#EC751E" />
            <path
              d="M3.166 2.10561L2.10535 3.16626L3.69632 4.75723L4.75697 3.69658L3.166 2.10561Z"
              fill="#EC751E"
            />
            <path d="M9.75 0H8.25V2.25H9.75V0Z" fill="#EC751E" />
            <path
              d="M14.8337 2.10556L13.2427 3.69653L14.3033 4.75718L15.8943 3.16621L14.8337 2.10556Z"
              fill="#EC751E"
            />
            <path d="M18 8.25H15.75V9.75H18V8.25Z" fill="#EC751E" />
            <path
              d="M9 3.75C6.105 3.75 3.75 6.10575 3.75 9C3.75 11.0355 4.93575 12.8775 6.75 13.7393V17.25H11.25V13.7393C13.0642 12.8783 14.25 11.0362 14.25 9C14.25 6.10575 11.895 3.75 9 3.75Z"
              fill="#EC751E"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_723">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <h3>To improve your product recommendation, keep on going</h3>
      </div>
    )
}

const styles = {
    
  title: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
}

export default ImprovementTitle