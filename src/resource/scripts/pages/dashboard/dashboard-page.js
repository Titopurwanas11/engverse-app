import { Card } from './cards';
import { ScoreProgressionChart } from './chart';
import { HistoryTestTable } from './table';



export default class DashboardPage {
  async render() {
    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    ${Card('Total Practices', '5', 'bg-blue-500', 'text-blue-600',  '<icon-svg name="document_check" class="text-blue-600 w-6 h-6"></icon-svg>')}
                    ${Card('Accuracy Rate', '80%', 'bg-green-500', 'text-green-600', '<icon-svg name="percent_badge" class="text-green-600 w-6 h-6"></icon-svg>')}
                    ${Card('Most Practiced Section', 'Structure and Written Comprehension', 'bg-purple-500', 'text-purple-600', '<icon-svg name="chart_bar" class="text-purple-600 w-6 h-6"></icon-svg>')}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="bg-white shadow rounded-lg p-6">
                        <h2 class="text-xl font-semibold text-gray-800 mb-4">Score Progression</h2>
                        ${ScoreProgressionChart()}
                    </div>

                    <div class="bg-white shadow rounded-lg p-6">
                        <h2 class="text-xl font-semibold text-gray-800 mb-4">History Test</h2>
                        ${HistoryTestTable()}
                    </div>
                </div>
            </div>
        `;
  }

  async afterRender() {
    
  }
}
