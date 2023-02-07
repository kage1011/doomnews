
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Input } from 'antd';
import { useState } from 'react';

import '../Header/style.scss';

const { Search } = Input;
function Header() {


  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const onSearch = (value) => console.log(value);
 
  const items = [
    {
      label: 'Home',
      key: 'home',
      icon: <MailOutlined />,
    },
    {
      label: 'Info',
      key: 'info',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Categoris',
      key: 'Categoris',
      icon: <SettingOutlined />,
      children: [
        {
          label: 'Option 1',
          key: 'setting:1',
        },
        {
          label: 'Option 2',
          key: 'setting:2',
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
      ),
      key: 'alipay',
    },
  ];
  return (
    <div id="content">
      <div className='banner'><h1>DOOM NEWS</h1></div>
      <div className='menu-head'>
        <div className='menu-left'>
          <Menu className='main-menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
        <div className='menu-right'>         
          <Search id='search-header' placeholder="input search text" onSearch={onSearch} enterButton style={{width:"300px"}} />
        </div>

      </div>
    </div>
  );
}

export default Header;