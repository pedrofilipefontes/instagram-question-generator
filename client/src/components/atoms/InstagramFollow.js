import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function InstagramFollow(props) {
  const { t } = props;

  return (
    <div id="instaFollow">
      <FontAwesomeIcon icon={faInstagram} />{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={t.follow.instagramProfile[0].link}
      >
        {t.follow.instagramProfile[0].label}
      </a>
    </div>
  );
}
