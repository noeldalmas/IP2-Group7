import React from 'react';

function Header(props) {
    const menuItems = [
        {
          name:"Visualisations",
          link:"/visualisations"
        },
        {
          name:"Sources",
          link:"/sources"
        },
        {
          name:"Cryptos",
          link:"/cryptos"
        },
        {
          name:"Authors",
          link:"/about"
        },
        {
          name:"Contact Us",
          link:"/contact"
        }
      ]
    return (
        <header className='flex items-center w-full'>
            <a href="/" className='text-white text-xl font-700'>ANALYTICS HUB</a>
            <nav className='mx-auto'>
              <ul className='flex gap-2'>
                  {menuItems.map((item, i)=>(
                  <li>
                      <a href={item.link} className="text-white">{item.name.toUpperCase()}</a>
                  </li>
                  ))

                  }
                  
              </ul>
            </nav>

            <div className='toggleContainer hidden'>
              <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
              <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
              </label>
            </div>
      </header>
    );
}

export default Header;