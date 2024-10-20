import React from "react";

const LastTransaction = () => {
  
  const transactions = [
    { id: 1, description: "Loan ", amount: 5000, date: "2023-07-01" },
    { id: 2, description: "Repayment", amount: -500, date: "2023-07-15" },
    { id: 3, description: "Interest Payment", amount: -50, date: "2023-07-15" },
    { id: 4, description: "Repayment", amount: -500, date: "2023-08-01" },
    { id: 5, description: "Interest Payment", amount: -45, date: "2023-08-01" },
    { id: 6, description: "Interest Payment", amount: -45, date: "2023-08-01" },
    { id: 7, description: "Interest Payment", amount: -45, date: "2023-08-01" },
  ];

  return (
    <section className="bg-white dark:border-slate-700/90 border-slate-100 rounded-lg shadow-md dark:bg-black min-w-full border overflow-hidden">
      <h2 className="text-lg font-semibold p-4 border-b text-black dark:text-white">
        Transaction History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-black text-gray-500 dark:text-slate-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-black divide-y text-xs lg:text-sm divide-gray-200 dark:divide-gray-700">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-3 whitespace-nowrap text-black dark:text-white">
                  {transaction.description}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${
                    transaction.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ${Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${
                    transaction.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ${Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black dark:text-white">
                  {transaction.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LastTransaction;
