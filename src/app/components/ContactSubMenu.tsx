"use client";

import Link from "next/link";
import Styles from "./style.module.css";

export default function ContactSubMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className={Styles.SubmenuMainContainer}>
      <div className={`${Styles.contact_Submenu_container} ${Styles.submenu_Container_Row}`}>
        <div className={Styles.ColumnConatiner}>
          <div className={Styles.leftTitlecolumn}>
            <h3 className={Styles.leftTitle}>Contact</h3>
          </div>
          <div className={Styles.middleColumn}>
            <ul className={Styles.ul}>
              <li>
                <Link href="/career" className={Styles.Submenu_Item}>
                  Career
                </Link>
              </li>
              <li>
                <Link href="/faqs" className={Styles.Submenu_Item}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className={Styles.Submenu_Item}>
                  Communication
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
