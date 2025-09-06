import CenteredComponent from "../components/CenteredComponent";
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Plot from 'react-plotly.js';

const metricsData = [
  { date: "2025-08-01", reactionTime: 1.5, accuracy: 0.85, colorError: 2, shapeError: 1, bothError: 1 },
  { date: "2025-08-03", reactionTime: 1.7, accuracy: 0.82, colorError: 1, shapeError: 2, bothError: 0 },
  { date: "2025-08-05", reactionTime: 1.6, accuracy: 0.87, colorError: 0, shapeError: 1, bothError: 2 },
];

const labels = metricsData.map(d => d.date);
const reactionTimes = metricsData.map(d => d.reactionTime);
const accuracies = metricsData.map(d => d.accuracy * 100);
const errorStack = metricsData.map(d => [d.colorError, d.shapeError, d.bothError]);

const lastSession = metricsData[metricsData.length - 1];
const currentAccuracy = (lastSession.accuracy * 100).toFixed(0);
const currentReaction = lastSession.reactionTime.toFixed(2);
const totalMissed = lastSession.colorError + lastSession.shapeError + lastSession.bothError;

const cardStyle = {
  backgroundColor: '#fff',
  padding: 16,
  borderRadius: 12,
  textAlign: 'center',
  flex: 1,
  boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
};




export default function MetricsPage() {
	return (
        <CenteredComponent>
           <div className="pt-24 text-center text-lg px-4">
               <div style={{ padding: 20 }}>
      <h2>Latest Session Summary</h2>
      <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
        <div style={cardStyle}>Accuracy: {currentAccuracy}%</div>
        <div style={cardStyle}>Reaction Time: {currentReaction}s</div>
        <div style={cardStyle}>Missed Presses: {totalMissed}</div>
      </div>

      <h3>Reaction Time Trend</h3>
      <Line
        data={{
          labels,
          datasets: [{
            label: 'Reaction Time (s)',
            data: reactionTimes,
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.2)',
            tension: 0.4,
          }],
        }}
      />

      <h3>Accuracy Trend</h3>
      <Line
        data={{
          labels,
          datasets: [{
            label: 'Accuracy (%)',
            data: accuracies,
            borderColor: 'green',
            backgroundColor: 'rgba(0,128,0,0.2)',
            tension: 0.4,
          }],
        }}
      />

      <h3>Error Types Trend</h3>
      <Bar
        data={{
          labels,
          datasets: [
            { label: 'Color Error', data: errorStack.map(e => e[0]), backgroundColor: 'tomato' },
            { label: 'Shape Error', data: errorStack.map(e => e[1]), backgroundColor: 'blue' },
            { label: 'Both Wrong', data: errorStack.map(e => e[2]), backgroundColor: 'gold' },
          ],
        }}
      />
    </div>
    <div>
        <Plot
  data={[
    {
      y: reactionTimes,
      type: 'box',
      name: 'Your Sessions',
      boxpoints: 'all', 
      marker: { color: 'red' }
    },
    {
      y: [0.25, 0.25, 0.25, 0.25, 0.25],
      type: 'box',
      name: 'Human Avg',
      marker: { color: 'blue' }
    }
  ]}
  layout={{ width: 600, height: 400, title: 'Reaction Time Distribution' }}
/>
    </div>
            </div>
            
        </CenteredComponent>
	);
}