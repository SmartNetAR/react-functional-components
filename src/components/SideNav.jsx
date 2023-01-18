import React from 'react';

export default function SideNav(props) {
  return (
    <div>
      <ul>
        {props.links &&
          props.links.map((link, idx) => (
            <li key={link.path + idx}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
