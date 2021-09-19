import './App.css';
import { TotalExpense } from './components/TotalExpense/TotalExpense';
import { CategorizedExpense } from './components/CategorizedExpense/CategorizedExpense';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import AddExpense from './components/AddExpense/AddExpense';


const theme = createTheme({
  palette: {
    primary: {
      main: '#9575CD',
    },
    secondary: {
      main: '#1565C0',
    },

    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  const [open, setOpen] = React.useState(false);

  const categories = [
    { name: "Bills", amount: 2000 },
    { name: "Family", amount: 2000 },
    { name: "Gifts", amount: 2000 },
    { name: "Transportation", amount: 2000 },
    { name: "Medical", amount: 2000 }
  ]

  const handleAddNewClick = () => {
    setOpen(true);
  }
  const handleModalClose = () => {
    setOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="main">
          <TotalExpense />
          <hr className="divider" />
          <div className="categories">
            {categories.map((category) => <CategorizedExpense name={category.name} key={category.name} amount={category.amount} />)}
          </div>
          <button className="addNew" onClick={handleAddNewClick}>+</button>
          <AddExpense open={open} onClose={handleModalClose} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
