import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import PageLayout from './components/PageLayout';
import CenteredComponent from './components/CenteredComponent';
import TextDisplay from './components/TextDisplay';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function MetricsPage() {
  
  const [score1, setScore1] = useState(50);
  const [score2, setScore2] = useState(70);

  
  const averageMemoryScore = 72;
  const averageAttentionScore = 85;

  const data = {
    labels: ['Metric A', 'Metric B', 'Metric C', 'Metric D'],
    datasets: [
      {
        label: 'Score 1',
        data: [score1, 60, 75, 80],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'Score 2',
        data: [40, score2, 65, 90],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  return (
    <PageLayout heading="Metrics">
      <CenteredComponent>
        <TextDisplay>
          <h2>Interactive Scores</h2>
          <Line data={data} />

          <div style={{ marginTop: '30px' }}>
            <label>
              Metric A Score 1: {score1}
              <input
                type="range"
                min="0"
                max="100"
                value={score1}
                onChange={(e) => setScore1(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </label>

            <label style={{ marginTop: '20px', display: 'block' }}>
              Metric B Score 2: {score2}
              <input
                type="range"
                min="0"
                max="100"
                value={score2}
                onChange={(e) => setScore2(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </label>
          </div>

          <hr style={{ margin: '40px 0' }} />

          <h2>Average Metrics (from DB)</h2>

          <label>
            Average Memory Score:
            <input
              type="range"
              min={0}
              max={100}
              value={averageMemoryScore}
              disabled
              style={{ width: '100%' }}
            />
            <p>{averageMemoryScore} / 100</p>
          </label>

          <label style={{ marginTop: '20px', display: 'block' }}>
            Average Attention Score:
            <input
              type="range"
              min={0}
              max={100}
              value={averageAttentionScore}
              disabled
              style={{ width: '100%' }}
            />
            <p>{averageAttentionScore} / 100</p>
          </label>
        </TextDisplay>
      </CenteredComponent>
    </PageLayout>
  );
}

export default MetricsPage;
