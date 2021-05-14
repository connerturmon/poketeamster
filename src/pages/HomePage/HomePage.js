import React from 'react';
import './HomePage.scss';
import EVTracker from '../../components/EVTracker/EVTracker';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-header">

      </div>
      <EVTracker />
      <div className="homepage-footer">
        <p>Developed by Krossbloom © 2021</p>
        <p>v0.1.0-beta</p>
        <a href="https://www.github.com/connerturmon/poketeamster"><img className="homepage-github-img" alt="GitHub Link" width="100px" src="https://img.shields.io/github/stars/connerturmon/poketeamster?style=social" /></a>
      </div>
    </div>
  );
}