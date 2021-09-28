import 'package:expense/model/transactions.dart';
import 'package:expense/widgets/transaction_list.dart';
import 'package:flutter/material.dart';
import 'add_new_transaction.dart';

class UserTransactionsController extends StatefulWidget {
  // const UserTransactionsController({Key? key}) : super(key: key);

  @override
  _UserTransactionsControllerState createState() =>
      _UserTransactionsControllerState();
}

class _UserTransactionsControllerState
    extends State<UserTransactionsController> {
  final List<Transaction> _userTransactions = [
    Transaction(
        id: "T1", title: "ToothBrush", amount: 12.00, date: DateTime.now()),
    Transaction(
        id: "T2", title: "ToothPaste", amount: 69.00, date: DateTime.now()),
  ];

  void _addNewTransaction(String txTitle, double txAmount) {
    final newTx = Transaction(
        id: DateTime.now().toString(),
        title: txTitle,
        amount: txAmount,
        date: DateTime.now());
    setState(() {
      _userTransactions.add(newTx);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        AddNewTransaction(_addNewTransaction),
        TransactionList(_userTransactions),
      ],
    );
  }
}
