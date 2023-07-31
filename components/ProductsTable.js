import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useRef } from "react";
import ActionsFieldRenderer from "./ActionsFieldRenderer";

const ProductsTable = ({ products, updateProduct }) => {
  const gridApiRef = useRef(null);

  const actionsCellRenderer = (props) => {
    const { _id, model, price } = props.data;
    return (
      <ActionsFieldRenderer
        _id={_id}
        model={model}
        price={price}
        updateProduct={updateProduct}
      />
    );
  };

  const columnDefs = [
    {
      headerName: "SL.",
      field: "",
      width: 60,
      valueGetter: (params) => params.node.rowIndex + 1,
      suppressSizeToFit: true,
    },
    {
      headerName: "Model Name",
      field: "model",
      filter: true,
      width: 220,
    },
    {
      headerName: "Price",
      field: "price",
      filter: true,
      minWidth: 100,
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
