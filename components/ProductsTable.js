import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useRef } from "react";
import ActionsFieldRenderer from "./ActionsFieldRenderer";

const ProductsTable = () => {
  const products = [
    { index: 1, model: "Optimus 100AH", _id: 11, price: 100 },
    { index: 2, model: "Optimus 130AH", _id: 22, price: 200 },
    { index: 3, model: "Optimus 165AH", _id: 33, price: 300 },
  ];

  const gridApiRef = useRef(null);

  const actionsCellRenderer = (props) => {
    const { _id, model, price } = props.data;
    return <ActionsFieldRenderer id={_id} model={model} price={price} />;
  };

  const columnDefs = [
    {
      headerName: "SL.",
      field: "index",
      width: 60,
    },
    {
      headerName: "Model Name",
      field: "model",
      filter: true,
      flex: 1,
    },
    {
      headerName: "Price",
      field: "price",
      filter: true,
      flex: 1,
    },
    {
      headerName: "Actions",
      field: "actions",
      pinned: "right",
      width: 90,
      cellRenderer: (params) => actionsCellRenderer(params),
    },
  ];

  const onGridReady = (params) => {
    gridApiRef.current = params.api;
  };

  useEffect(() => {
    gridApiRef.current?.setRowData(products);
  }, [products]);

  return (
    <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
      <AgGridReact
        onGridReady={onGridReady}
        rowData={products}
        domLayout="autoHeight"
        columnDefs={columnDefs}
        animateRows={true}
      />
    </div>
  );
};

export default ProductsTable;
