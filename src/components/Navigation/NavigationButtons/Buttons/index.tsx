import Link from "next/link";
import React from "react";
type Props = {
  namePage: string;
  href: string;
};
function Buttons(props: Props) {
  return (
    <Link className="bg-buttonsNavBg p-4 rounded-lg mb-8" href={props.href}>
      {props.namePage}
    </Link>
  );
}

export default Buttons;
