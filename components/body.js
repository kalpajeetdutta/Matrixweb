import { useState } from "react";
import Matrix from "./matrix";
import { add, multiply, substract, transpose } from "../components/operations";
import data from "../utils/tables";

function Body() {
  const [matrix1rows, setMatrix1Rows] = useState(0);
  const [matrix1cols, setMatrix1Cols] = useState(0);
  const [matrix2rows, setMatrix2Rows] = useState(0);
  const [matrix2cols, setMatrix2Cols] = useState(0);
  const [error, setError] = useState('');
  const [ans, setAns] = useState(null);

  const table1 = data(matrix1rows, matrix1cols);
  const table2 = data(matrix2rows, matrix2cols);


  return (
    <div className="bg-gradient-to-br from-[#93c8df] to-[#E1EAEE] min-h-screen py-5" style={{height: '100%'}}>
        <div className="flex sm:flex-row flex-col p-5">
          <div className="flex-1 px-5">
            <div className="text-center text-2xl font-medium">Matrix A</div>
            <div>
              <div className="flex items-center justify-center my-10">
                <div className="">
                  <input
                    className="w-20 bg-gray-400 p-2 rounded-md outline-none text-center placeholder:text-slate-700"
                    placeholder="Row(s)"
                    type="number"
                    onChange={(event) => {
                      let row1 = event.target.value;

                      if (row1 === "") {
                        setMatrix1Rows(3);
                        setError(null);
                      } else if (row1 >= 1 && row1 <= 10) {
                        setMatrix1Rows(parseInt(row1));
                      } else {
                        console.log("Row out of range");
                        setError("Row out of range");
                      }
                    }}
                  />
                </div>
                <div className="mx-8 text-xl">x</div>
                <div className="">
                  <input
                    className="w-20 bg-gray-400 p-2 rounded-md outline-none text-center placeholder:text-slate-700"
                    placeholder="Col(s)"
                    type="number"
                    onChange={(event) => {
                      let col1 = event.target.value;

                      if (col1 === "") {
                        setMatrix1Cols(3);
                        setError(null);
                      } else if (col1 >= 1 && col1 <= 10) {
                        setMatrix1Cols(parseInt(col1));
                      } else {
                        console.log("Column out of range");
                        setError("Column out of range");
                      }
                    }}
                  />
                </div>
              </div>
              <Matrix rows={matrix1rows} cols={matrix1cols} tables={table1} />
            </div>
          </div>
          <div className="flex-1 px-5 mt-3 sm:mt-0">
            <div className="text-center text-2xl font-medium">Matrix B</div>
            <div>
              <div className="flex items-center justify-center my-10">
                <div className="">
                  <input
                    className="w-20 bg-gray-400 p-2 rounded-md outline-none text-center placeholder:text-slate-700"
                    placeholder="Row(s)"
                    type="number"
                    onChange={(event) => {
                      let row2 = event.target.value;

                      if (row2 === "") {
                        setMatrix2Rows(3);
                        setError(null);
                      } else if (row2 >= 1 && row2 <= 10) {
                        setMatrix2Rows(parseInt(row2));
                      } else {
                        console.log("Row out of range");
                        setError("Row out of range");
                      }
                    }}
                  />
                </div>
                <div className="mx-8 text-xl">x</div>
                <div className="">
                  <input
                    className="w-20 bg-gray-400 p-2 rounded-md outline-none text-center placeholder:text-slate-700"
                    placeholder="Col(s)"
                    type="number"
                    onChange={(event) => {
                      let col2 = event.target.value;

                      if (col2 === "") {
                        setMatrix2Cols(3);
                        setError(null);
                      } else if (col2 >= 1 && col2 <= 10) {
                        setMatrix2Cols(parseInt(col2));
                      } else {
                        console.log("Column out of range");
                        setError("Column out of range");
                      }
                    }}
                  />
                </div>
              </div>
              <Matrix rows={matrix2rows} cols={matrix2cols} tables={table2} />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-evenly items-center mt-10 px-10">
        <div className="mb-3 sm:mb-0">
          <button
            className="text-xl font-medium py-2 px-8 rounded-lg text-gray-50 bg-[#032e5c] hover:opacity-70"
            onClick={() => {
              if (matrix1rows === matrix2rows && matrix1cols === matrix2cols) {
                let value = add(table1, table2, matrix1rows, matrix1cols);
                console.log(value);
                value.length != 0 ? setError(null) : setError("Please enter rows and columns")
                setAns(value);
              } else {
                console.log("Matrix cannot be added");
                setError("Matrix cannot be added");
              }
            }}
          >
            A + B
          </button>
        </div>
        <div className="mb-3 sm:mb-0">
          <button
            className="text-xl font-medium py-2 px-8 rounded-lg text-gray-50 bg-[#032e5c] hover:opacity-70"
            onClick={() => {
              if (matrix1rows === matrix2rows && matrix1cols === matrix2cols) {
                let value = substract(table1, table2, matrix1rows, matrix1cols);
                console.log(value);
                value.length != 0 ? setError(null) : setError("Please enter rows and columns")
                setAns(value)
              } else {
                console.log("Matrix cannot be substract");
                setError("Matrix cannot be substract");
              }
            }}
          >
            A - B
          </button>
        </div>
        <div className="mb-3 sm:mb-0">
          <button
            className="text-xl font-medium py-2 px-8 rounded-lg text-gray-50 bg-[#032e5c] hover:opacity-70"
            onClick={() => {
              if (matrix1cols === matrix2rows) {
                let value = multiply(
                  table1,
                  table2,
                  matrix1rows,
                  matrix1cols,
                  matrix2cols
                );
                console.log(value);
                value.length != 0 ? setError(null) : setError("Please enter rows and columns")
                setAns(value)
              } else {
                console.log("Rows and columns didn't matched");
                setError("Rows and columns didn't matched");
              }
            }}
          >
            A x B
          </button>
        </div>
        <div className="mb-3 sm:mb-0">
          <button
            className="text-xl font-medium py-2 px-8 rounded-lg text-gray-50 bg-[#032e5c] hover:opacity-70"
            onClick={() => {
              let value = transpose(table1, matrix1rows, matrix1cols);
              console.log(value);
              value.length != 0 ? setError(null) : setError("Please enter rows and columns")
              setAns(value)
            }}
          >
            Transpose of A
          </button>
        </div>
        <div className="mb-3 sm:mb-0">
          <button
            className="text-xl font-medium py-2 px-8 rounded-lg text-gray-50 bg-[#032e5c] hover:opacity-70"
            onClick={() => {
              let value = transpose(table2, matrix2rows, matrix2cols);
              console.log(value);
              value.length != 0 ? setError(null) : setError("Please enter rows and columns");
              setAns(value);
            }}
          >
            Transpose of B
          </button>
        </div>
      </div>
      <div className="sm:min-h-[200px] min-h-[100px] w-[80%] flex bg-slate-400 bg-opacity-70 rounded-xl mx-auto mt-10 p-5">
        {error && 
            <div className="text-base text-red-500 text-center w-full">{error}</div>
        }
        <div className="text-lg font-medium text-black">
            {ans && 
                ans.map((row , i) => {
                    return(
                        <div key={i}>
                            <div>
                                {row.map((col, i) => {
                                    return(
                                        <span key={i} className="mx-3">{col}</span>
                                    )
                                })}
                            </div>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default Body;
