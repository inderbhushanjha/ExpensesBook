// ignore_for_file: sized_box_for_whitespace

import 'package:expense/widgets/user_transaction_controller.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    darkTheme: ThemeData.light(),
    debugShowCheckedModeBanner: false,
    home: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  final titleController = TextEditingController();
  final amountController = TextEditingController();

  MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Expense App"),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Container(
              width: double.infinity,
              child: const Card(
                child: Text(
                  "Chart",
                ),
                elevation: 5,
              ),
            ),
            UserTransactionsController(),
          ],
        ),
      ),
    );
  }
}
