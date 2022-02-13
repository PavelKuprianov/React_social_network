import React from 'react';
import s from './Header.module.css';


export default function Header() {
  return (
    <header className={s.header}>
      <div>
        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
      </div>
  </header>
  );
}
