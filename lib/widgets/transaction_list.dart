import 'package:expense/model/transactions.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import 'empty_transaction_list.dart';

class TransactionList extends StatelessWidget {
  final List<Transaction> transactions;

  TransactionList(this.transactions);

  var f = NumberFormat("##,##,##,##,###.0#", "en_US");

  @override
  Widget build(BuildContext context) {
    // logic for empty transaction list
    return transactions.isEmpty
        ? const EmptyTransactionList()
        : Container(
            height: 700,
            child: ListView.builder(
              itemBuilder: (ctx, index) {
                return Card(
                  elevation: 5,
                  child: Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(10),
                        margin: const EdgeInsets.symmetric(
                          vertical: 10,
                          horizontal: 15,
                        ),
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: Colors.black,
                            width: 2,
                          ),
                        ),
                        child: Text(
                          '₹${f.format(transactions[index].amount).toString()}',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 20,
                            color: Theme.of(context).primaryColor,
                          ),
                        ),
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            transactions[index].title,
                            style: const TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.w700,
                            ),
                          ),
                          Text(
                            DateFormat('EEE, d/M/y')
                                .format(transactions[index].date),
                            style: const TextStyle(
                              fontWeight: FontWeight.w500,
                              color: Colors.grey,
                            ),
                          ),
                        ],
                      )
                    ],
                  ),
                );
              },
              itemCount: transactions.length,
            ),
          );
  }
}
