import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { VictoryBoxPlot } from 'victory-native';

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
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Game Metrics Overview</Text>

			{metricsData.map((game, index) => (
				<View key={index} style={styles.chartContainer}>
					<Text style={styles.gameTitle}>{game.game}</Text>

					<VictoryBoxPlot
						data={game.metrics}
						boxWidth={20}
						animate={{ duration: 1000 }}
						style={{
							data: {
								fill: 'rgba(100, 150, 255, 0.6)',
								stroke: 'blue',
								strokeWidth: 2
							}
						}}
					/>
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 20
	},
	gameTitle: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		marginVertical: 10
	},
	chartContainer: {
		marginBottom: 40
	}
});
