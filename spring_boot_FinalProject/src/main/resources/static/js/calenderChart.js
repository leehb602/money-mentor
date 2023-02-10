/**
 * 
 */
 
const chart1 = new Chart('chart1', {
	type:'doughnut',
	data:{
		labels :["카드", "예적금", "대출"],
		datasets:[{
			backgroundColor :['yellow', 'red', 'green'],
			data:[200000, 150000, 50000]
		}]
	},
	options : {
		responsive:false
	}
});	

const assetChart = new Chart('total-asset-chart', {
	type:'doughnut',
	data:{
		labels :["모은돈", "빌린돈"],
		datasets:[{
			backgroundColor :['blue', 'gray'],
			data:[2000000, 300000]
		}]
	},
	options : {
		responsive:false,
		rotation: 1 * Math.PI, 
		circumference: 1 * Math.PI 
	}
});	


$(document).ready(function(){
});