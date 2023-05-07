import data from "../utils/tables";

function Matrix({rows, cols, tables}) {

    // const tables = data(rows, cols);
    // console.log(tables);

    return (
        <div className='flex justify-center items-center'>
            <table>
                <tbody>
                    {tables.map((row, x_index) => {
                        return(
                            <tr key={x_index} className="">
                                {row.map((col, y_index) => {
                                    return(
                                        <td key={y_index} className="rounded-md overflow-hidden w-20">
                                            <input className='w-full outline-none text-center py-3 bg-gray-400' type="number" 
                                                onChange={event => {
                                                    let value = event.target.value;
                                                    // console.log(value)
                                                    if(value === ''){
                                                        value = 0;
                                                    }
                                                    // console.log(event.target.value)
                                                    // console.log('index: ', x_index, y_index)
                                                    tables[x_index][y_index] = parseInt(value);
                                                    // console.log(tables)
                                                }}/>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
  )
}

export default Matrix