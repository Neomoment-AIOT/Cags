"use client";

import Link from "next/link";
import Styles from "./style.module.css";

export default function ProductSubMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className={Styles.SubmenuMainContainer}>
      <div className={`${Styles.product_Submenu_container} ${Styles.submenu_Container_Row}`}>
        <div className={Styles.ColumnConatiner}>
          <div className={Styles.leftTitlecolumn}>
            <h3 className={Styles.leftTitle}>Products</h3>
          </div>
          <div className={Styles.middleColumn}>
            <ul className={Styles.ul}>
              <li>
                <Link href="/products/papers" className={Styles.Submenu_Item}>
                  Rolling Papers
                </Link>
              </li>
              <li>
                <Link href="/products/tubes" className={Styles.Submenu_Item}>
                  Cigarette Tubes
                </Link>
              </li>
              <li>
                <Link href="/products/tobacco" className={Styles.Submenu_Item}>
                  Tobacco
                </Link>
              </li>
              <li>
                <Link href="http://www.my10bak.com/" className={Styles.Submenu_Item}>
                  Water Pipe
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className={Styles.Submenu_Item}>
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className={Styles.contactRightColumn}>
            <p className={Styles.subheading}>
              Join Our Distribution Network and Grow Your Business
            </p>
            <Link href="/contact" className={Styles.contactSubMenu}>
              <span className={Styles.contactSubMenu_Item}>Contact us</span>
              <span className={Styles.contactSubMenu_ItemArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
