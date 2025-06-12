export const HistoryTestTable = () => {
    // Data dummy untuk tabel
    const data = [
        { date: '10 May 2024', time: '10:45 AM', section: 'Reading', result: '8/10' },
        { date: '10 Apr 2025', time: '10:45 AM', section: 'Listening', result: '10/10' },
        { date: '12 Jan 2025', time: '10:45 AM', section: 'Structure', result: '7/10' },
    ];

    const getSectionPillClass = (section) => {
        switch (section.toLowerCase()) {
            case 'reading':
                return 'bg-blue-100 text-blue-800';
            case 'listening':
                return 'bg-green-100 text-green-800'; 
            case 'structure':
                return 'bg-purple-100 text-purple-800'; 
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const rows = data.map(item => `
        <tr class="border-b border-gray-200 last:border-b-0">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                ${item.date}<br>
                <span class="text-xs text-gray-500">${item.time}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span class="inline-flex px-3 py-1 rounded-full font-medium ${getSectionPillClass(item.section)}">
                    ${item.section}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${item.result}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline">View</a>
            </td>
        </tr>
    `).join('');

    return `
        <div class="overflow-x-auto">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">History Practice</h2>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${rows}
                    </tbody>
                </table>
            </div>
        </div>
    `;
};
