import 'package:flutter/material.dart';

class EmptyTransactionList extends StatelessWidget {
  const EmptyTransactionList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        const Text("No transactions added yet!"),
        const SizedBox(
          height: 10,
        ),
        SizedBox(
          height: 500,
          child: Image.asset(
            "assets/images/waiting.png",
            fit: BoxFit.cover,
          ),
        )
      ],
    );
  }
}
