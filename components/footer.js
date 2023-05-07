function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#93c8df] to-[#E1EAEE] min-h-screen p-10">
        <p>
          A matrix, in a mathematical context, is a rectangular array of
          numbers, symbols, or expressions that are arranged in rows and
          columns. Matrices are often used in scientific fields such as physics,
          computer graphics, probability theory, statistics, calculus, numerical
          analysis, and more.
        </p>
        <p>
          The dimensions of a matrix,{" "}
          <b>
            <i>A</i>
          </b>
          , are typically denoted as{" "}
          <b>
            <i>m &#215; n</i>
          </b>
          . This means that{" "}
          <b>
            <i>A</i>
          </b>{" "}
          has{" "}
          <b>
            <i>m</i>
          </b>{" "}
          rows and{" "}
          <b>
            <i>n</i>
          </b>{" "}
          columns. When referring to a specific value in a matrix, called an
          element, a variable with two subscripts is often used to denote each
          element based on its position in the matrix. For example, given{" "}
          <b>
            <i>
              a<sub>i,j</sub>
            </i>
          </b>
          , where{" "}
          <b>
            <i>i = 1</i>
          </b>{" "}
          and{" "}
          <b>
            <i>j = 3</i>
          </b>
          ,{" "}
          <b>
            <i>
              a<sub>1,3</sub>
            </i>
          </b>{" "}
          is the value of the element in the first row and the third column of
          the given matrix.
        </p>
        <p>
          Matrix operations such as addition, multiplication, subtraction, etc.,
          are similar to what most people are likely accustomed to seeing in
          basic arithmetic and algebra, but do differ in some ways, and are
          subject to certain constraints. Below are descriptions of the matrix
          operations that this calculator can perform.
        </p>
        <br />
        <h3 className="text-2xl font-semibold mb-3">Matrix addition</h3>
        <p>
          Matrix addition can only be performed on matrices of the same size.
          This means that you can only add matrices if both matrices are{" "}
          <b>
            <i>m &#215; n</i>
          </b>
          . For example, you can add two or more{" "}
          <b>
            <i>3 &#215; 3, 1 &#215; 2</i>
          </b>
          , or{" "}
          <b>
            <i>5 &#215; 4</i>
          </b>{" "}
          matrices. You cannot add a{" "}
          <b>
            <i>2 &#215; 3</i>
          </b>{" "}
          and a{" "}
          <b>
            <i>3 &#215; 2</i>
          </b>{" "}
          matrix, a{" "}
          <b>
            <i>4 &#215; 4</i>
          </b>{" "}
          and a{" "}
          <b>
            <i>3 &#215; 3</i>
          </b>
          , etc. The number of rows and columns of all the matrices being added
          must exactly match.
        </p>
        <p>
          If the matrices are the same size, matrix addition is performed by
          adding the corresponding elements in the matrices. For example, given
          two matrices,{" "}
          <b>
            <i>A</i>
          </b>{" "}
          and{" "}
          <b>
            <i>B</i>
          </b>
          , with elements{" "}
          <b>
            <i>
              a<sub>i,j</sub>
            </i>
          </b>
          , and{" "}
          <b>
            <i>
              b<sub>i,j</sub>
            </i>
          </b>
          , the matrices are added by adding each element, then placing the
          result in a new matrix,{" "}
          <b>
            <i>C</i>
          </b>
          , in the corresponding position in the matrix:
        </p>
        <br />
        <table align="center">
            <tbody>
          <tr>
            <td>A =</td>
            <td>
              <table className="border-l border-r border-black">
                <tbody>
                <tr>
                  <th className="w-1 border-t border-b border-black"></th>
                  <th>
                    <table>
                        <tbody>
                      <tr>
                        <td className="p-[5px]">1</td>
                        <td className="p-[5px]">2</td>
                      </tr>
                      <tr>
                        <td className="p-[5px]">3</td>
                        <td className="p-[5px]">4</td>
                      </tr>
                      </tbody>
                    </table>
                  </th>
                  <th className="w-1 border-t border-b border-black"></th>
                </tr>
                </tbody>
              </table>
            </td>
            <td>; B =</td>
            <td>
              <table className="border-l border-r border-black">
                <tbody>
                <tr>
                <th className="w-1 border-t border-b border-black"></th>
                  <th>
                    <table>
                        <tbody>
                      <tr>
                        <td className="p-[5px]">5</td>
                        <td className="p-[5px]">6</td>
                      </tr>
                      <tr>
                        <td className="p-[5px]">7</td>
                        <td className="p-[5px]">8</td>
                      </tr>
                      </tbody>
                    </table>
                  </th>
                  <th className="w-1 border-t border-b border-black"></th>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>
        <br />
        <p>
          In the above matrices,{" "}
          <b>
            <i>
              a<sub>1,1</sub> = 1
            </i>
          </b>
          ;{" "}
          <b>
            <i>
              a<sub>1,2</sub> = 2
            </i>
          </b>
          ;{" "}
          <b>
            <i>
              b<sub>1,1</sub> = 5
            </i>
          </b>
          ;{" "}
          <b>
            <i>
              b<sub>1,2</sub> = 6
            </i>
          </b>
          ; etc. We add the corresponding elements to obtain{" "}
          <b>
            <i>
              c<sub>i,j</sub>
            </i>
          </b>
          . Adding the values in the corresponding rows and columns:
        </p>
        <br />
        <table align="center">
            <tbody>
          <tr>
            <td>
              a<sub>1,1</sub> + b<sub>1,1</sub> = 1 + 5 = 6 = c<sub>1,1</sub>
            </td>
          </tr>
          <tr>
            <td>
              a<sub>1,2</sub> + b<sub>1,2</sub> = 2 + 6 = 8 = c<sub>1,2</sub>
            </td>
          </tr>
          <tr>
            <td>
              a<sub>2,1</sub> + b<sub>2,1</sub> = 3 + 7 = 10 = c<sub>2,1</sub>
            </td>
          </tr>
          <tr>
            <td>
              a<sub>2,2</sub> + b<sub>2,2</sub> = 4 + 8 = 12 = c<sub>2,2</sub>
            </td>
          </tr>
          </tbody>
        </table>
        <br />
        <p>
          Thus, matrix{" "}
          <b>
            <i>C</i>
          </b>{" "}
          is:
        </p>
        <br />
        <table align="center">
            <tbody>
          <tr>
            <td>C =</td>
            <td>
              <table className="border-l border-r border-black">
                <tbody>
                <tr>
                <th className="w-1 border-t border-b border-black"></th>
                  <th>
                    <table>
                        <tbody>
                      <tr>
                        <td className="p-[5px]">6</td>
                        <td className="p-[5px]">8</td>
                      </tr>
                      <tr>
                        <td className="p-[5px]">10</td>
                        <td className="p-[5px]">12</td>
                      </tr>
                      </tbody>
                    </table>
                  </th>
                  <th className="w-1 border-t border-b border-black"></th>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>

        <br />
        <h3 className="text-2xl font-semibold mb-3">Matrix subtraction</h3>
        <p>
          Matrix subtraction is performed in much the same way as matrix
          addition, described above, with the exception that the values are
          subtracted rather than added. If necessary, refer to the information
          and examples above for a description of notation used in the example
          below. Like matrix addition, the matrices being subtracted must be the
          same size. If the matrices are the same size, then matrix subtraction
          is performed by subtracting the elements in the corresponding rows and
          columns:
        </p>
        <br />
        <table align="center">
            <tbody>
          <tr>
            <td>A =</td>
            <td>
              <table className="border-l border-r border-black">
                <tbody>
                <tr>
                <th className="w-1 border-t border-b border-black"></th>
                  <th>
                    <table>
                        <tbody>
                      <tr>
                        <td className="p-[5px]">1</td>
                        <td className="p-[5px]">2</td>
                      </tr>
                      <tr>
                        <td className="p-[5px]">3</td>
                        <td className="p-[5px]">4</td>
                      </tr>
                      </tbody>
                    </table>
                  </th>
                  <th className="w-1 border-t border-b border-black"></th>
                </tr>
                </tbody>
              </table>
            </td>
            <td>; B =</td>
            <td>
              <table className="border-l border-r border-black">
                <tbody>
                <tr>
                <th className="w-1 border-t border-b border-black"></th>
                  <th>
                    <table>
                        <tbody>
                      <tr>
                        <td className="p-[5px]">5</td>
                        <td className="p-[5px]">6</td>
                      </tr>
                      <tr>
                        <td className="p-[5px]">7</td>
                        <td className="p-[5px]">8</td>
                      </tr>
                      </tbody>
                    </table>
                  </th>
                  <th className="w-1 border-t border-b border-black"></th>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>
        <br />
        <table align="center">
            <tbody>
          <tr>
            <td>
              a<sub>1,1</sub> - b<sub>1,1</sub> = 1 - 5 = -4 = c<sub>1,1</sub>
            </td>
          </tr>
          <tr>
            <td>
              a<sub>1,2</sub> - b<sub>1,2</sub> = 2 - 6 = -4 = c<sub>1,2</sub>
            </td>
          </tr>
          <tr>
            <td>
              a<sub>2,1</sub> - b<sub>2,1</sub> = 3 - 7 = -4 = c<sub>2,1</sub>
            </td>
          </tr>
          <tr>
            <td>
              a<sub>2,2</sub> - b<sub>2,2</sub> = 4 - 8 = -4 = c<sub>2,2</sub>
            </td>
          </tr>
          </tbody>
        </table>
        <br />
        <p>
          Thus, matrix{" "}
          <b>
            <i>C</i>
          </b>{" "}
          is:
        </p>
        <br />
        <table align="center">
            <tbody>
          <tr>
            <td>C =</td>
            <td>
              <table className="border-l border-r border-black">
                <tbody>
                <tr>
                <th className="w-1 border-t border-b border-black"></th>
                  <th>
                    <table>
                        <tbody>
                      <tr>
                        <td className="p-[5px]">-4</td>
                        <td className="p-[5px]">-4</td>
                      </tr>
                      <tr>
                        <td className="p-[5px]">-4</td>
                        <td className="p-[5px]">-4</td>
                      </tr>
                      </tbody>
                    </table>
                  </th>
                  <th className="w-1 border-t border-b border-black"></th>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>

        <br />
        <h3 className="text-2xl font-semibold mb-3">Matrix multiplication</h3>
        <p>
          <b className="text-lg font-semibold mb-2">Scalar multiplication:</b>
        </p>
        <p>
          Matrices can be multiplied by a scalar value by multiplying each
          element in the matrix by the scalar. For example, given a matrix{" "}
          <b>
            <i>A</i>
          </b>{" "}
          and a scalar{" "}
          <b>
            <i>c</i>
          </b>
          :
        </p>
        <br />
        <table align="center">
          <tbody>
            <tr>
              <td>A =</td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">2</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">3</td>
                              <td className="p-[5px]">4</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>; c = 5</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          The product of{" "}
          <b>
            <i>c</i>
          </b>{" "}
          and{" "}
          <b>
            <i>A</i>
          </b>{" "}
          is:
        </p>
        <br />
        <table align="center">
          <tbody>
            <tr>
              <td>5 &#215;</td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">2</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">3</td>
                              <td className="p-[5px]">4</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>=</td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">5</td>
                              <td className="p-[5px]">10</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">15</td>
                              <td className="p-[5px]">20</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          <b className="text-lg font-semibold mb-2">Matrix-matrix multiplication:</b>
        </p>
        <p>
          Multiplying two (or more) matrices is more involved than multiplying
          by a scalar. In order to multiply two matrices, the number of columns
          in the first matrix must match the number of rows in the second
          matrix. For example, you can multiply a{" "}
          <b>
            <i>
              2 &#215; <font color="blue">3</font>
            </i>
          </b>{" "}
          matrix by a{" "}
          <b>
            <i>
              <font color="blue">3</font> &#215; 4
            </i>
          </b>{" "}
          matrix, but not a{" "}
          <b>
            <i>
              2 &#215; <font color="red">3</font>
            </i>
          </b>{" "}
          matrix by a{" "}
          <b>
            <i>
              <font color="red">4</font> &#215; 3
            </i>
          </b>
          .
        </p>
        <p>Can be multiplied:</p>
        <br />
        <table align="center">
          <tbody>
            <tr>
              <td>A = </td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">
                                <font color="blue">
                                  a<sub>1,1</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                <font color="blue">
                                  a<sub>1,2</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                <font color="blue">
                                  a<sub>1,3</sub>
                                </font>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">
                                a<sub>2,1</sub>
                              </td>
                              <td className="p-[5px]">
                                a<sub>2,2</sub>
                              </td>
                              <td className="p-[5px]">
                                a<sub>2,3</sub>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>; B =</td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">
                                <font color="blue">
                                  b<sub>1,1</sub>
                                </font>
                              </td >
                              <td className="p-[5px]">
                                b<sub>1,2</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>1,3</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>1,4</sub>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">
                                <font color="blue">
                                  b<sub>2,1</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                b<sub>2,2</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>2,3</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>2,4</sub>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">
                                <font color="blue">
                                  b<sub>3,1</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                b<sub>3,2</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>3,3</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>3,4</sub>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>Cannot be multiplied:</p>
        <br />
        <table align="center">
          <tbody>
            <tr>
              <td>A = </td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">
                                <font color="red">
                                  a<sub>1,1</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                <font color="red">
                                  a<sub>1,2</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                <font color="red">
                                  a<sub>1,3</sub>
                                </font>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">
                                a<sub>2,1</sub>
                              </td>
                              <td className="p-[5px]">
                                a<sub>2,2</sub>
                              </td>
                              <td className="p-[5px]">
                                a<sub>2,3</sub>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>; B =</td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">
                                <font color="red">
                                  b<sub>1,1</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                b<sub>1,2</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>1,3</sub>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">
                                <font color="red">
                                  b<sub>2,1</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                b<sub>2,2</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>2,3</sub>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">
                                <font color="red">
                                  b<sub>3,1</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                b<sub>3,2</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>3,3</sub>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">
                                <font color="red">
                                  b<sub>4,1</sub>
                                </font>
                              </td>
                              <td className="p-[5px]">
                                b<sub>4,2</sub>
                              </td>
                              <td className="p-[5px]">
                                b<sub>4,3</sub>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          Note that when multiplying matrices,{" "}
          <b>
            <i>A &#215; B</i>
          </b>{" "}
          does not necessarily equal{" "}
          <b>
            <i>B &#215; A</i>
          </b>
          . In fact, just because{" "}
          <b>
            <i>A</i>
          </b>{" "}
          can be multiplied by{" "}
          <b>
            <i>B</i>
          </b>{" "}
          doesn't mean that{" "}
          <b>
            <i>B</i>
          </b>{" "}
          can be multiplied by{" "}
          <b>
            <i>A</i>
          </b>
          .
        </p>
        <p>
          If the matrices are the correct sizes, and can be multiplied, matrices
          are multiplied by performing what is known as the dot product. The dot
          product involves multiplying the corresponding elements in the row of
          the first matrix, by that of the columns of the second matrix, and
          summing up the result, resulting in a single value. The dot product
          can only be performed on sequences of equal lengths. This is why the
          number of columns in the first matrix must match the number of rows of
          the second.
        </p>
        <p>
          The dot product then becomes the value in the corresponding row and
          column of the new matrix,{" "}
          <b>
            <i>C</i>
          </b>
          . For example, from the section above of matrices that can be
          multiplied, the blue row in{" "}
          <b>
            <i>A</i>
          </b>{" "}
          is multiplied by the blue column in{" "}
          <b>
            <i>B</i>
          </b>{" "}
          to determine the value in the first column of the first row of matrix{" "}
          <b>
            <i>C</i>
          </b>
          . This is referred to as the dot product of row 1 of{" "}
          <b>
            <i>A</i>
          </b>{" "}
          and column 1 of{" "}
          <b>
            <i>B</i>
          </b>
          :
        </p>
        <br />
        <p className="text-center">
          a<sub>1,1</sub>&#215;b<sub>1,1</sub> + a<sub>1,2</sub>&#215;b
          <sub>2,1</sub> + a<sub>1,3</sub>&#215;b<sub>3,1</sub> = c
          <sub>1,1</sub>
        </p>
        <br />
        <p>
          The dot product is performed for each row of{" "}
          <b>
            <i>A</i>
          </b>{" "}
          and each column of{" "}
          <b>
            <i>B</i>
          </b>{" "}
          until all combinations of the two are complete in order to find the
          value of the corresponding elements in matrix{" "}
          <b>
            <i>C</i>
          </b>
          . For example, when you perform the dot product of row 1 of{" "}
          <b>
            <i>A</i>
          </b>{" "}
          and column 1 of{" "}
          <b>
            <i>B</i>
          </b>
          , the result will be{" "}
          <b>
            <i>
              c<sub>1,1</sub>
            </i>
          </b>{" "}
          of matrix{" "}
          <b>
            <i>C</i>
          </b>
          . The dot product of row 1 of{" "}
          <b>
            <i>A</i>
          </b>{" "}
          and column 2 of{" "}
          <b>
            <i>B</i>
          </b>{" "}
          will be{" "}
          <b>
            <i>
              c<sub>1,2</sub>
            </i>
          </b>{" "}
          of matrix{" "}
          <b>
            <i>C</i>
          </b>
          , and so on, as shown in the example below:
        </p>
        <br />
        <table align="center">
          <tbody>
            <tr>
              <td>A = </td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">2</td>
                              <td className="p-[5px]">1</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">3</td>
                              <td className="p-[5px]">4</td>
                              <td className="p-[5px]">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>; B =</td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">5</td>
                              <td className="p-[5px]">6</td>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">1</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">7</td>
                              <td className="p-[5px]">8</td>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">1</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          When multiplying two matrices, the resulting matrix will have the same
          number of rows as the first matrix, in this case{" "}
          <b>
            <i>A</i>
          </b>
          , and the same number of columns as the second matrix,{" "}
          <b>
            <i>B</i>
          </b>
          . Since{" "}
          <b>
            <i>A</i>
          </b>{" "}
          is{" "}
          <b>
            <i>
              <font color="purple">2</font> &#215; <font color="green">3</font>
            </i>
          </b>{" "}
          and{" "}
          <b>
            <i>B</i>
          </b>{" "}
          is{" "}
          <b>
            <i>
              <font color="green">3</font> &#215; <font color="blue">4</font>
            </i>
          </b>
          ,{" "}
          <b>
            <i>C</i>
          </b>{" "}
          will be a{" "}
          <b>
            <i>
              <font color="purple">2</font> &#215; <font color="blue">4</font>
            </i>
          </b>{" "}
          matrix. The colors here can help determine first, whether two matrices
          can be multiplied, and second, the dimensions of the resulting matrix.
          Next, we can determine the element values of{" "}
          <b>
            <i>C</i>
          </b>{" "}
          by performing the dot products of each row and column, as shown below:
        </p>
        <br />
        <table align="center">
          <tbody>
            <tr>
              <td>C = </td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">20</td>
                              <td className="p-[5px]">23</td>
                              <td className="p-[5px]">4</td>
                              <td className="p-[5px]">4</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">44</td>
                              <td className="p-[5px]">51</td>
                              <td className="p-[5px]">8</td>
                              <td className="p-[5px]">8</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          Below, the calculation of the dot product for each row and column of{" "}
          <b>
            <i>C</i>
          </b>{" "}
          is shown:
        </p>
        <br />
        <table align="center">
          <tbody>
            <tr>
              <td>
                c<sub>1,1</sub> = 1&#215;5 + 2&#215;7 + 1&#215;1 = 20
              </td>
            </tr>
            <tr>
              <td>
                c<sub>1,2</sub> = 1&#215;6 + 2&#215;8 + 1&#215;1 = 23
              </td>
            </tr>
            <tr>
              <td>
                c<sub>1,3</sub> = 1&#215;1 + 2&#215;1 + 1&#215;1 = 4
              </td>
            </tr>
            <tr>
              <td>
                c<sub>1,4</sub> = 1&#215;1 + 2&#215;1 + 1&#215;1 = 4
              </td>
            </tr>
            <tr>
              <td>
                c<sub>2,1</sub> = 3&#215;5 + 4&#215;7 + 1&#215;1 = 44
              </td>
            </tr>
            <tr>
              <td>
                c<sub>2,2</sub> = 3&#215;6 + 4&#215;8 + 1&#215;1 = 51
              </td>
            </tr>
            <tr>
              <td>
                c<sub>2,3</sub> = 3&#215;1 + 4&#215;1 + 1&#215;1 = 8
              </td>
            </tr>
            <tr>
              <td>
                c<sub>2,4</sub> = 3&#215;1 + 4&#215;1 + 1&#215;1 = 8
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <h3 className="text-2xl font-semibold mb-3">Transpose of a matrix</h3>
        <p>
          The transpose of a matrix, typically indicated with a "T" as an
          exponent, is an operation that flips a matrix over its diagonal. This
          results in switching the row and column indices of a matrix, meaning
          that{" "}
          <b>
            <i>
              a<sub>ij</sub>
            </i>
          </b>{" "}
          in matrix{" "}
          <b>
            <i>A</i>
          </b>
          , becomes{" "}
          <b>
            <i>
              a<sub>ji</sub>
            </i>
          </b>{" "}
          in{" "}
          <b>
            <i>
              A<sup>T</sup>
            </i>
          </b>
          . If necessary, refer above for a description of the notation used.
        </p>
        <p>
          An{" "}
          <b>
            <i>m &#215; n</i>
          </b>{" "}
          matrix, transposed, would therefore become an{" "}
          <b>
            <i>n &#215; m</i>
          </b>{" "}
          matrix, as shown in the examples below:
        </p>
        <br />
        <table align="center">
          <tbody>
            <tr className="border-b-8 border-transparent">
              <td>A = </td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">3</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">2</td>
                              <td className="p-[5px]">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b-8 border-transparent">
              <td>
                A<sup>T</sup> ={" "}
              </td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">1</td>
                              <td className="p-[5px]">2</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">3</td>
                              <td className="p-[5px]">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b-8 border-transparent">
              <td>B = </td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">20</td>
                              <td className="p-[5px]">23</td>
                              <td className="p-[5px]">4</td>
                              <td className="p-[5px]">4</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">44</td>
                              <td className="p-[5px]">51</td>
                              <td className="p-[5px]">8</td>
                              <td className="p-[5px]">8</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-b-8 border-transparent">
              <td>
                B<sup>T</sup> ={" "}
              </td>
              <td>
                <table className="border-l border-r border-black">
                  <tbody>
                    <tr>
                    <th className="w-1 border-t border-b border-black"></th>
                      <th>
                        <table>
                          <tbody>
                            <tr>
                              <td className="p-[5px]">20</td>
                              <td className="p-[5px]">44</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">23</td>
                              <td className="p-[5px]">51</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">4</td>
                              <td className="p-[5px]">8</td>
                            </tr>
                            <tr>
                              <td className="p-[5px]">4</td>
                              <td className="p-[5px]">8</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className="w-1 border-t border-b border-black"></th>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
      {/* Footer section */}
      <div className=" bg-[#032e5c] p-5 flex flex-col items-center py-5">
        <div className="text-sm text-gray-50">Developed By</div>
        <div className="text-xs text-gray-50 font-light my-1">
          Kalpajeet Dutta & Sharbanee Kalita
        </div>
      </div>
    </div>
  );
}

export default Footer;
