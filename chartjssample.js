// Define the data for the bar chart here
const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Sales',
        data: [20, 35, 25, 45, 30, 55],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Create the bar chart here
const barChart = new Chart(document.getElementById('bar-chart'), {
    type: 'bar',
    data: barChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Define the data for the pie chart here
const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

// Create the pie chart here
const pieChart = new Chart(document.getElementById('pie-chart'), {
    type: 'pie',
    data: pieChartData,
    options: {}
});
