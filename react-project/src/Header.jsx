import reactLogo from './assets/react.svg'
function Header(){
    return(<header className='header'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>)
}

export default Header