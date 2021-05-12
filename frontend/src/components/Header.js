import Button from './Button'

const Header = () => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            <h1>Events</h1>
            <Button text='Add'
                onClick={onClick}
            />
        </header>
    )
}

export default Header