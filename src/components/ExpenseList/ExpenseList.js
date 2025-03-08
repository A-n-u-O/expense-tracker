import { List, ListItem, ListItemText } from "@mui/material";

const ExpenseList = (expense) => {
  return (
    <List>
      {expense.map((expense, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={expense.title}
            secondary={`$${expense.amount.toFixed(2)} - ${expense.date}`}
          />
        </ListItem>
      ))}
    </List>
  );
};
export default ExpenseList;
