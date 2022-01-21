import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    const headerStyle = {
        backgroundColor: bgColor, 
        color: textColor
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h1>{text}</h1>
            </div>
        </header>
    )
}

// Set default props for Header component
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header

