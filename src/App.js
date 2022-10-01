import { Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AddProduct } from "./components/AddProduct";
import { EditProduct } from "./components/EditProduct";
import { ShowProduct } from "./components/ShowProduct";

function App() {
  return (
    <BrowserRouter>
      <Box component="nav" sx={{ backgroundColor: "gray" }}>
        <Toolbar>
          <Link to="/">
            <Button variant="contained">List Product</Button>
          </Link>
          <Link to="/add">
            <Button variant="contained">Add Product</Button>
          </Link>
        </Toolbar>
      </Box>
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
