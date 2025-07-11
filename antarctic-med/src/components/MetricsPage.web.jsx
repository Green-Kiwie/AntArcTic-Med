import React from 'react';
import { VictoryChart, VictoryTheme, VictoryBoxPlot } from 'victory';

const metricsData = [
	{
		game: 'Switch It Up',
		metrics: [
			{ x: 'Memory', y: [3, 5, 7, 6, 4] },
			{ x: 'Reaction', y: [2, 6, 8, 5, 7] }
		]
	},
	{
		game: 'Speed Recall',
		metrics: [
			{ x: 'Memory', y: [4, 6, 6, 7, 5] },
			{ x: 'Focus', y: [3, 4, 5, 5, 6] }
		]
	}
];

export default function MetricsPage() {
	return (
		<div style={{ padding: '30px' }}>
			<h1 style={{ textAlign: 'center' }}>Game Metrics Overview</h1>

			{metricsData.map((game, index) => (
				<div key={index} style={{ marginTop: '60px' }}>
					<h2 style={{ textAlign: 'center' }}>{game.game}</h2>

					<VictoryChart
						theme={VictoryTheme.material}
						domainPadding={40}
						animate={{ duration: 1200, easing: 'bounce' }}
					>
						<VictoryBoxPlot
							data={game.metrics}
							boxWidth={20}
							style={{
								data: {
									fill: 'rgba(100, 150, 255, 0.6)',
									stroke: 'blue',
									strokeWidth: 2
								}
							}}
						/>
					</VictoryChart>
				</div>
			))}
		</div>
	);
}
