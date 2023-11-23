import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import GitHubSvg from "./github.svg";
import { faSquareGithub } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer id="footer">
      <p>Made by M Karthik</p>
      <a target="_blank" href="https://github.com/karthik8611">
        <img id="footer-img" src={GitHubSvg} />
      </a>
    </footer>
  );
}
