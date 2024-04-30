

const normaliceLineArray = (data) => {
    return data.map((dataLine)=>{
        const lineArray=dataLine.split(',')
        return {
            text :lineArray[1],
            number:lineArray[2],
            hex: lineArray[3],
        }
    })
}

export const normaliceResponseData = (data) => {
    /**
     * 
     * {
"file": "file1.csv",
"lines": [
{
"text" :"RgTya",
"number": 64075909,
"hex": "70ad29aacf0b690b0467fe2b2767f765"
},
. . .
]
}
     */
    return data.map((csvInfo)=>{

        return{
            file:csvInfo[0].split(',')[0],
            lines: normaliceLineArray(csvInfo),

        }

    })    


  };

