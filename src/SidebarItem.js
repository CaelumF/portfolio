import React, {Component} from 'react';
import './css/SidebarItem.css'

const SidebarItem = ({onClick, contentId, children, currentPage}) =>(
  <div
     className={currentPage != contentId ? "SidebarListItem" : "Highlighted"}
     onClick={() => {onClick.call()}}
  >
     <p>
       {children}
    </p>
  </div>
);
export default SidebarItem
