import React from 'react';
import './HomePage.scss';
import EVTracker from '../../components/EVTracker/EVTracker';

export default function HomePage() {
  return (
    <div className="homepage">
      <EVTracker />
    </div>
  );
}