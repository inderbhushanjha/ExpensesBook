import 'package:flutter/material.dart';

class AddNewTransaction extends StatelessWidget {
  final titleController = TextEditingController();
  final amountController = TextEditingController();

  final Function addTransaction;
  AddNewTransaction(this.addTransaction);

  void _submitData() {
    final title = titleController.text;
    final amount = double.parse(amountController.text);
    if (title.isEmpty || amount <= 0) {
      return;
    }
    addTransaction(
      title,
      amount,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        padding: const EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            TextField(
              decoration: const InputDecoration(labelText: 'Title'),
              controller: titleController,
              onSubmitted: (_) {
                _submitData();
              },
            ),
            TextField(
              keyboardType: TextInputType.numberWithOptions(),
              decoration: const InputDecoration(labelText: 'Amount'),
              controller: amountController,
              onSubmitted: (_) {
                _submitData();
              },
            ),
            TextButton(
                child: const Text('Add Transactions'), onPressed: _submitData),
          ],
        ),
      ),
    );
  }
}
